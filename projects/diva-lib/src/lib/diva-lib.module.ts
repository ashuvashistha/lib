import { NgModule } from '@angular/core';
import { DivaLibComponent } from './diva-lib.component';
import { HeaderComponent } from './header/header.component';
import {
  MatSidenavModule,
  MatTableModule,
  MatSelectModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  declarations: [DivaLibComponent, HeaderComponent],
  imports: [
  ],
  exports: [DivaLibComponent]
})
export class DivaLibModule { }
