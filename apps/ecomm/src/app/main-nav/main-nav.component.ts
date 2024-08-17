import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AntdUiModule } from '@shreyas-workspace/antd'

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [RouterModule, AntdUiModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css'
})
export class MainNavComponent {
  isCollapsed = false;

}
