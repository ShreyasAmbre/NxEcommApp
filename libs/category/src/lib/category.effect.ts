import { inject, Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, tap } from 'rxjs';
import { getCategoriesActions, categoryActionSuccess } from './category.action';

@Injectable()
export class CategoryEffects {
  private actions$ = inject(Actions);

  constructor(private categoryService: CategoryService) {}

  loadCategory$ = createEffect(() => this.actions$.pipe(
    ofType(getCategoriesActions),
    exhaustMap(() => {
      return this.categoryService.getCategory().pipe(
        tap(data => console.log("ACTION tap =>", data)),
        map((category) => categoryActionSuccess(category)),
        catchError(() => EMPTY)
      );
    })
  ));
}
