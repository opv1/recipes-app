import { ReactElement } from 'react'
import { RecipeType } from 'types'

export interface IMainProps {
  page: string
  keywords: string
  title: string
}

export interface IListProps {
  recipes: RecipeType[]
  row?: boolean
}

export interface IRecipeProps {
  data: RecipeType
}

export interface IActiveLinkProps {
  activeClassName: string
  href: string
  children: ReactElement
}

export interface IMessageProps {
  message: string
}

export interface INavProps {
  className: string
}

export interface IHomePageProps {
  serverData: RecipeType | object
  serverError: {
    [key: string]: string
  }
}

export interface IRecipesPageProps {
  serverData: RecipeType[] | any[]
  serverError: string
}

export interface IRecipePageProps {
  serverData: RecipeType | object
  serverError: string
}
