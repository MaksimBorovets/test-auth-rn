import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../../common/types';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: builder => ({
    getUser: builder.query<IUser, string>({
      query: userId => `users/${userId}`,
    }),
  }),
});

export const { useGetUserQuery, useLazyGetUserQuery } = usersApi;
