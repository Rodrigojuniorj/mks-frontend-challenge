import { api } from '@/data/api'
import { TProducts } from '@/data/types/products'

export async function getProducts(): Promise<TProducts> {
  const params = {
    page: 1,
    rows: 8,
    sortBy: 'id',
    orderBy: 'DESC',
  }

  const response = await api('/products', params, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}
