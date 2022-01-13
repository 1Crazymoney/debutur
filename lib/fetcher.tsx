export const fetcher = (
  url: string,
  data: {
    name: string
    bio: string
    avatar_url: string
    theme: string
    username: string
    buttonTitles: string[]
    buttonLinks: string[]
  }
) =>
  fetch(window.location.origin + url, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((r) => r.json())
