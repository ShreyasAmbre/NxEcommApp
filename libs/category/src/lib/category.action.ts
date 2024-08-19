import { createAction } from '@ngrx/store';

export const getCategoriesActions = createAction('[Category] Get Categories')

export const categoryActionSuccess = createAction(
  '[Category] Get Categories Success',
  (categories: string[]) => ({ categories })
)

export const categoryActionFailed = createAction(
  '[Category] Get Categories Failed',
  (error: string) => ({ error })
)
