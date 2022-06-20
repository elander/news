import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { NotfounComponent } from './notfoun/notfoun.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {path: '', component: SportsComponent},
  {path: 'science', component: ScienceComponent},
  {path: '**', component: NotfounComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
