import { Routes, RouterModule } from '@angular/router';
import { RisTemplateComponent } from './ris-template/ris-template.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {  
    path: 'ris', component: RisTemplateComponent 
  },
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule {}

//export const AppRouteRoutes = RouterModule.forRoot(routes);
