import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRepositoriesComponent } from './components/list-repositories/list-repositories.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
    { path: '', component: ListRepositoriesComponent },
    { path: '**', component:  ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
