import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { CheckboxComponent } from './dynamic-controls/checkbox/checkbox.component';
import { DropdownComponent } from './dynamic-controls/dropdown/dropdown.component';
import { FileComponent } from './dynamic-controls/file/file.component';
import { RadioComponent } from './dynamic-controls/radio/radio.component';
import { TextboxComponent } from './dynamic-controls/textbox/textbox.component';
import {ButtonModule} from 'primeng/button';
import { RadioButtonModule, DropdownModule, CheckboxModule, InputTextModule, PanelModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    PanelModule
  ],
  declarations: [
     DynamicFormBuilderComponent,
     FieldBuilderComponent,
     CheckboxComponent,
     DropdownComponent,
     FileComponent,
     RadioComponent,
     TextboxComponent,
    ],
  exports:[DynamicFormBuilderComponent],
  providers: []
})
export class DynamicFormBuilderModule { }
