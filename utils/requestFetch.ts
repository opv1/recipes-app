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
    const data = await requestFetch(
      `https://api.spoonacular.com/recipes/random?`
    )
    return data.recipes[0]
  } catch (err) {
    throw err
  }
}

export const getRecipeList = async (number: number): Promise<RecipeType[]> => {
  try {
    const data = await requestFetch(
      `https://api.spoonacular.com/recipes/random?number=${number}&`
    )
    return data.recipes
  } catch (err) {
    throw err
  }
}

export const getFoundRecipes = async (form: FormType): Promise<any[]> => {
  try {
    const data = await requestFetch(
      `https://api.spoonacular.com/recipes/autocomplete?number=${form.quantity}&query=${form.query}&`
    )
    return data
  } catch (err) {
    throw err
  }
}

export const getRecipeInfo = async (id: string): Promise<RecipeType> => {
  try {
    const data = await requestFetch(
      `https://api.spoonacular.com/recipes/${id}/information?`
    )
    return data
  } catch (err) {
    throw err
  }
}
