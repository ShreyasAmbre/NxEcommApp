import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AntdUiModule } from '@shreyas-workspace/antd'
import { CategoryService, getCategoriesActions, selectCategories } from '@shreyas-workspace/category';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [RouterModule, AntdUiModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css'
})
export class MainNavComponent implements OnInit{

  // categories$ = inject(CategoryService).getCategory()
  categories = []

  constructor(private readonly catgeoryService: CategoryService, private readonly store: Store){}

  ngOnInit(): void {
    this.store.dispatch(getCategoriesActions())
    this.getCategories()
  }

  getCategories(){
    this.store.select(selectCategories).subscribe((data:any) => {
      this.categories = data
      console.log("CAT =>", this.categories)
    })
  }

}
