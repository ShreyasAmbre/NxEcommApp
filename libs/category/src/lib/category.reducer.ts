import { createReducer, on } from '@ngrx/store';
import { categoryActionSuccess, categoryActionFailed } from './category.action';

export interface CategoryState {
  categories: string[]
  currenCategory: string,
  error: string
}

const initialState: CategoryState = {
  categories: [],
  currenCategory: '',
  error: ''
}

export const categoryReducer = createReducer(
  initialState,
  on(categoryActionSuccess, (state, action) => {
    console.log("ACTION =>", action)
    return {
      ...state,
      categories: action.categories
    }
  }),
  on(categoryActionFailed, (state, action) => {
    return {
      ...state,
      categories: [],
      error: action.error
    }
  })
)
