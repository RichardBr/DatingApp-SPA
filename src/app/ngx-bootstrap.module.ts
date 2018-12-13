import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
    TabsModule,
    BsDatepickerModule,
    PaginationModule,
    ButtonsModule
  ]
})
export class NgxBootstrapModule { }
