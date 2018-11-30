import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
    TabsModule
  ]
})
export class NgxBootstrapModule { }
