import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRepositoriesComponent } from './components/list-repositories/list-repositories.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    { path: '', component: ListRepositoriesComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component:  ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
