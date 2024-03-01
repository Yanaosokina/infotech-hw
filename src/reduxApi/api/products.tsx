import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductsResponse = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

export type Category = string;

  type ProductsQueryPayload = {
    skip?: number;
    limit?: number;
    category: string;
  };

type ProductsSearchQueryPayload = {
  skip?: number;
  limit?: number;
  searchTerm: string;
};
 export type UpdateProductRequest = {
  id: number;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  description: string;
};


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/products/categories",
    }),
    getProductsByCategory: builder.query<
      ProductsResponse,
      ProductsQueryPayload
    >({
      query: ({ skip = 0, category, limit = 10 }) =>
        category
          ? `/products/category/${category}?skip=${skip}&limit=${limit}`
          : `/products?skip=${skip}&limit=${limit}`,
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return endpointName + queryArgs.category;
      },
      merge: (currentCache, newItems) => {
        if (currentCache.skip >= newItems.skip) {
          return newItems
        }
        return {
          ...currentCache,
          ...newItems,
          products: [...currentCache.products, ...newItems.products],
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return JSON.stringify(currentArg) !== JSON.stringify(previousArg);
      },
    }),
    searchProducts: builder.query<ProductsResponse, ProductsSearchQueryPayload>(
      {
        query: ({ skip = 0, limit = 10, searchTerm }) =>
          searchTerm
            ? `/products/search?q=${searchTerm}&skip=${skip}&limit=${limit}`
            : `/products?skip=${skip}&limit=${limit}`,
        serializeQueryArgs: ({ endpointName, queryArgs }) => {
          return endpointName + queryArgs.searchTerm;
        },
        merge: (currentCache, newItems) => {
          if (currentCache.skip >= newItems.skip) {
            return newItems
          }
          
          return {
            ...currentCache,
            ...newItems,
            products: [...currentCache.products, ...newItems.products],
          };
        },
        forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg;
        },
      }
    ),
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    updateProduct: builder.mutation<Product, UpdateProductRequest>({
      query: ({ id, price, discountPercentage, stock, brand, category, description }) => {
        return {
          url: `/products/${id}`,
          method: 'PUT',
          body: { price, discountPercentage, stock, brand, category, description }, 
        }
      },
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
      
        try {
          const { data } = await queryFulfilled;
          dispatch(
            productsApi.util.updateQueryData('getProductById', id, (draft) => {
              Object.assign(draft, data);
            })
          )
        } catch {}
      },
    })
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useLazyGetProductsByCategoryQuery,
  useSearchProductsQuery,
  useGetProductByIdQuery,
  useUpdateProductMutation,
  reducer,
  middleware,
} = productsApi;
