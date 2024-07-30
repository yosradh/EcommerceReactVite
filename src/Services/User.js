import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/`}),
  endpoints: (builder) => ({
    getuserByName: builder.query({
      query: (name) => `${name}`,
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: 'visiteurs',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetuserByNameQuery, useCreateUserMutation } = userApi;
