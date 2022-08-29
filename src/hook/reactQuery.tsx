import { QueryClient, useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface ttype {
  name: string
}

export const prefetch = async(params: string, fetchFuntion: any) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery([params], fetchFuntion)
}

export const Query = (params: string, fetchFuntion: any) => {
  return useQuery([params], fetchFuntion)
}