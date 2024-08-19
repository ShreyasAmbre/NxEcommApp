import { categoryReducer, CategoryState } from './category.reducer';
import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';


const categoryFeatureKey = 'category'

export const selectCategoryState = createFeatureSelector<CategoryState>(categoryFeatureKey);

export const selectCategories = createSelector(
  selectCategoryState,
  (state) => state.categories
);

export const selectError = createSelector(
  selectCategoryState,
  (state) => state.error
);


export const categoryFeature = createFeature({
  name: categoryFeatureKey,
  reducer: categoryReducer,
})

