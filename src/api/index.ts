import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const urlProducts =
  "https://676ec0e7df5d7dac1ccb9be4.mockapi.io/api/products/products/";
const urlUsers= "https://676ec0e7df5d7dac1ccb9be4.mockapi.io/api/products/users";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["getAllProducts"],
    queryFn: async () => {
      const response = await axios.get<IAllProductsResponse[]>(urlProducts);

      return response.data;
    },
  });
};
export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["getAllProducts"],
    queryFn: async () => {
      const response = await axios.get<IAllUsersResponse[]>(urlUsers);

      return response.data;
    },
  });
};
