import { Routes, RouterModule } from '@angular/router';
import { RisTemplateComponent } from './ris-template/ris-template.component';
import { NgModule } from '@angular/core';
import { SampleFromComponent } from './sample-from/sample-from.component';

const routes: Routes = [
  {
    path: 'ris', component: RisTemplateComponent
  }, {
    path: 'sample-from', component: SampleFromComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

//export const AppRouteRoutes = RouterModule.forRoot(routes);
