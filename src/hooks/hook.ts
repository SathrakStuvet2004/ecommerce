import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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

// hooks/useProducts.js



export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetcher("/products"),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

};

export const useCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => fetcher("/cart"),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProduct: any) =>
      fetcher("/cart", {
        method: "POST",
        body: JSON.stringify(newProduct),
      }),

    onSuccess: () => {
      // refresh cart data automatically
      queryClient.invalidateQueries({ queryKey: ["cart"], });
    },
    // onSuccess: (newItem) => {
    //   queryClient.setQueryData(["cart"], (oldData: any = []) => [
    //     ...oldData,
    //     newItem
    //   ]);
    // }

  });
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      fetcher(`/cart/${id}`, {
        method: "DELETE",
      }),

    onSuccess: () => {
      // refresh cart after delete
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};