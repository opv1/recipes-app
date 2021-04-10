export const requestFetch = async (url) => {
  try {
    const res = await fetch(`${url}apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message || 'Oops!')
    }

    return data
  } catch (err) {
    throw err
  }
}
