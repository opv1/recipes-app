const requestFetch = async (url) => {
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

export const getRandomRecipe = async () => {
  try {
    const res = await requestFetch(
      `https://api.spoonacular.com/recipes/random?`
    )
    return res.recipes[0]
  } catch (err) {
    throw err
  }
}

export const getRecipeList = async (number) => {
  try {
    const res = await requestFetch(
      `https://api.spoonacular.com/recipes/random?number=${number}&`
    )
    return res.recipes
  } catch (error) {
    throw err
  }
}

export const getFoundRecipes = async (form) => {
  try {
    const res = await requestFetch(
      `https://api.spoonacular.com/recipes/autocomplete?number=${form.quantity}&query=${form.query}&`
    )
    return res
  } catch (err) {
    throw err
  }
}

export const getRecipeInfo = async (id) => {
  try {
    const res = await requestFetch(
      `https://api.spoonacular.com/recipes/${id}/information?`
    )
    return res
  } catch (err) {
    throw err
  }
}
