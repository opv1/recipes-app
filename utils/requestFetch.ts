import { RecipeType, FormType } from 'types'

const requestFetch = async (url: string) => {
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

export const getRandomRecipe = async (): Promise<RecipeType> => {
  try {
    const res = await requestFetch(
      `https://api.spoonacular.com/recipes/random?`
    )
    return res.recipes[0]
  } catch (err) {
    throw err
  }
}

export const getRecipeList = async (number: number): Promise<RecipeType[]> => {
  try {
    const res = await requestFetch(
      `https://api.spoonacular.com/recipes/random?number=${number}&`
    )
    return res.recipes
  } catch (err) {
    throw err
  }
}

export const getFoundRecipes = async (form: FormType): Promise<any[]> => {
  try {
    const res = await requestFetch(
      `https://api.spoonacular.com/recipes/autocomplete?number=${form.quantity}&query=${form.query}&`
    )
    return res
  } catch (err) {
    throw err
  }
}

export const getRecipeInfo = async (id: string): Promise<RecipeType> => {
  try {
    const res = await requestFetch(
      `https://api.spoonacular.com/recipes/${id}/information?`
    )
    return res
  } catch (err) {
    throw err
  }
}
