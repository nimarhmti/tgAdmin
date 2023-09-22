import { useQuery } from "@tanstack/react-query";
import { getAllMembers } from "./members";

export const useGetAllMembers = () =>
  useQuery({
    queryKey: ["members"],
    queryFn: getAllMembers,
  });
