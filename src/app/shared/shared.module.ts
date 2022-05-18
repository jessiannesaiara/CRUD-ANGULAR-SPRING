import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NomePipe } from './pipes/nome.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    NomePipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [ErrorDialogComponent,
    NomePipe]
})
export class SharedModule { }
