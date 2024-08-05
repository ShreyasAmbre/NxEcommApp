import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzImageModule } from 'ng-zorro-antd/image';
@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [NzButtonModule, NzMenuModule, NzLayoutModule, NzImageModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css'
})
export class MainNavComponent {

}
