import { NgModule } from '@angular/core';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";


const MatComponents = [
  MatDialogModule,
  MatFormFieldModule,
  MatStepperModule
]
@NgModule({
  exports: [MatComponents],
  imports: [MatComponents]
})
export class MatModule { }
