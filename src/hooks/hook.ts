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
//fetch users for login page
export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetcher("/users"),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false
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

//post products in aadmin page
export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: any) =>
      fetcher("/products", {
        method: "POST",
        body: JSON.stringify(newUser),
      }),

    onSuccess: (newItem) => {
      queryClient.setQueryData(["products"], (oldData: any = []) => [
        ...oldData,
        newItem
      ]);
    }

  });
};

//remove product from home page
export const useDeleteHomeItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      fetcher(`/products/${id}`, {
        method: "DELETE",
      }),

    onSuccess: () => {
      // refresh home page after delete
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
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
//post data to yourorders
export const useAddYourOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProduct: any) =>
      fetcher("/YourOrders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }),

    onSuccess: (newItem) => {
      queryClient.setQueryData(["YourOrders"], (oldData: any = []) => [
        ...oldData,
        newItem
      ]);
    }
  });
};
//fetch yourOrders
export const useGetYourOrders = () => {
  return useQuery({
    queryKey: ["GetYourOrders"],
    queryFn: () => fetcher("/YourOrders"),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
};
//delete your order data
export const useDeleteYourOrderItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      fetcher(`/YourOrders/${id}`, {
        method: "DELETE",
      }),

    onSuccess: () => {
      // refresh orders after delete
      queryClient.invalidateQueries({ queryKey: ["GetYourOrders"] });
    },
  });
};
//fetch data from mock api
export const getFromMockApi = async () => {
  const apiEndpoint = API
  try {
    const data = await fetch(apiEndpoint).then((response) => response.json())
    console.log(data, "mockapi")
    return data;
  }
  catch (err) {
    console.error
  }
}