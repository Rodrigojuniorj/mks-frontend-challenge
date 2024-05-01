import { env } from '@/env'

export function api(
  path: string,
  params?: Record<string, any>,
  init?: RequestInit,
) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL(`${baseUrl}${path}`)

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    )
  }

  return fetch(url.toString(), init)
}
