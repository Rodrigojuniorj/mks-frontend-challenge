export function api(
  path: string,
  params?: Record<string, any>,
  init?: RequestInit,
) {
  const baseUrl =
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1'
  const url = new URL(`${baseUrl}${path}`)

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    )
  }

  return fetch(url.toString(), init)
}
