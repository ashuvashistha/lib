import { NgModule } from '@angular/core';
import { DivaLibComponent } from './diva-lib.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [DivaLibComponent, HeaderComponent],
  imports: [
  ],
  exports: [DivaLibComponent]
})
export class DivaLibModule { }
