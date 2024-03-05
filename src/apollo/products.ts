import { gql, useQuery } from "@apollo/client"

const ALL_PRODUCTS = gql`
  query ($limit: Int, $offset: Int, $categoryId: Float, $title: String, $price_min: Int, $price_max: Int) {
    products(
      limit: $limit
      offset: $offset
      categoryId: $categoryId
      title: $title
      price_min: $price_min
      price_max: $price_max
    ) {
      id
      title
      price
      description
      images
      category {
        id
        name
      }
    }
  }
`

export function useAllProducts({
  limit,
  offset,
  categoryId,
  title,
  price_min,
  price_max,
}: {
  limit: number;
  offset: number;
  categoryId?: number;
  price_min?: number;
  price_max?: number;
  title?: string;
}) {
  return useQuery(ALL_PRODUCTS, {
    variables: { limit, offset, categoryId, price_min, price_max, title },
  })
}

export const GET_ONE_PRODUCT = gql`
  query ($id: ID!) {
    product(id: $id) {
      title
      price
    }
  }
`

export function useProduct({id}: {id: string}) {
  console.log(id)
  return useQuery<Model.Product>(GET_ONE_PRODUCT, {
    variables:{ id},
  })
}
