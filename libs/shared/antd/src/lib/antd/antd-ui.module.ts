import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
    NzFlexModule,
    NzIconModule
  ],
  exports : [
    CommonModule,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
    NzFlexModule,
    NzIconModule
  ]
})
export class AntdUiModule { }
