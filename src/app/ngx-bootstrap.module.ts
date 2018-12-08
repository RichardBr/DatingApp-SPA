import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, TabsModule, BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
    TabsModule,
    BsDatepickerModule
  ]
})
export class NgxBootstrapModule { }
