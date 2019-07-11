import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { RisTemplateComponent } from './ris-template/ris-template.component';

@NgModule({
   declarations: [
      AppComponent,
      RisTemplateComponent
      
   ],
   imports: [
      BrowserModule,
      ButtonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
