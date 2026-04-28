import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../../global";

export const fetcher = async (url: string, options = {}) => {
  const res = await fetch("http://localhost:3000" + url, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  if (!res.ok) {
    throw new Error("Request failed");
  }

  return res.json();
};

//add new user to users
export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: any) =>
      fetcher("/users", {
        method: "POST",
        body: JSON.stringify(newUser),
      }),

    onSuccess: (newItem) => {
      queryClient.setQueryData(["users"], (oldData: any = []) => [
        ...oldData,
        newItem
      ]);
    }

  });
};

//fetch products for home page
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetcher("/products"),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
};
//fetch cart items for cart page
export const useCart = () => {
  return useQuery({
    queryKey: ["Getcart"],
    queryFn: () => fetcher("/cart"),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
//send new product to cart
export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProduct: any) =>
      fetcher("/cart", {
        method: "POST",
        body: JSON.stringify(newProduct),
      }),

    onSuccess: (newItem) => {
      queryClient.setQueryData(["Getcart"], (oldData: any = []) => [
        ...oldData,
        newItem
      ]);
    }

  });
};
//remove product from cart
export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      fetcher(`/cart/${id}`, {
        method: "DELETE",
      }),

    onSuccess: () => {
      // refresh cart after delete
      queryClient.invalidateQueries({ queryKey: ["Getcart"] });
    },
  });
};
//fetch orders for order page
export const useOrders = () => {
  return useQuery({
    queryKey: ["GetOrders"],
    queryFn: () => fetcher("/Orders"),
    
    select: (data) =>
      data.Orders.flatMap((order: any) => order.items),

    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
};
//send new order to orders
export const useAddOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProduct: any) =>
      fetcher("/Orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }),

    onSuccess: (newItem) => {
      queryClient.setQueryData(["GetOrders"], (oldData: any = []) => [
        ...oldData,
        newItem
      ]);
    }
  });
};
//remove product from orders
export const useDeleteOrderItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      fetcher(`/Orders/${id}`, {
        method: "DELETE",
      }),

    onSuccess: () => {
      // refresh orders after delete
      queryClient.invalidateQueries({ queryKey: ["GetOrders"] });
    },
  });
};
//fetch data from mock api
export const getFromMockApi=async ()=>{
  const apiEndpoint= API
 try{
  const data= await fetch(apiEndpoint).then((response) => response.json())
  console.log(data, "mockapi")
  return data;
 }
 catch(err){
  console.error
 }
}