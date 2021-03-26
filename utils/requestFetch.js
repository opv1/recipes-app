export const requestFetch = async (url) => {
  try {
    const response = await fetch(
      `${url}apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Oops!')
    }

    return data
  } catch (err) {
    throw err
  }
}
