import axios from 'axios';

export async function getContacts() {
  try {
    const { data } = await axios(
      'https://6438fee64660f26eb1a7e5cd.mockapi.io/api/contacts'
    );
    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteContact(id) {
  try {
    const { data } = await axios({
      method: 'Delete',
      url: `https://6438fee64660f26eb1a7e5cd.mockapi.io/api/contacts/${id}`,
    });
    return data;
  } catch (error) {
    return error;
  }
}

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://6438fee64660f26eb1a7e5cd.mockapi.io/api/',
//   }),
//   tagTypes: ['contacts'],

//   endpoints: builder => ({
//     getcontacts: builder.query({
//       query: () => `contacts`,
//       providesTags: ['contacts'],
//     }),

//     deleteContact: builder.mutation({
//       query(id) {
//         return {
//           url: `contacts/${id}`,
//           method: 'Delete',
//         };
//       },
//       invalidatesTags: ['contacts'],
//     }),

//     addContact: builder.mutation({
//       query(body) {
//         return {
//           url: `contacts`,
//           method: 'POST',
//           body,
//         };
//       },

//       invalidatesTags: ['contacts'],
//     }),
//   }),
// });

// export const {
//   useGetcontactsQuery,
//   useDeleteContactMutation,
//   useAddContactMutation,
// } = contactsApi;
