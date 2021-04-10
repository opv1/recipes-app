const nameStorage = 'favorites-recipes'

export const setStorage = (data) => {
  localStorage.setItem(nameStorage, JSON.stringify(data))
}

export const getStorage = () => {
  const data = localStorage.getItem(nameStorage)

  if (data !== null) return JSON.parse(data)
  else return []
}

export const removeStorage = () => {
  localStorage.removeItem(nameStorage)
}
