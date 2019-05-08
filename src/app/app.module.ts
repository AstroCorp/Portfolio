import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule, IconsModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubAPIService } from './services/github-api.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListRepositoriesComponent } from './components/list-repositories/list-repositories.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ListRepositoriesComponent,
    RepositoryComponent,
    ErrorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    IconsModule,
  ],
  providers: [GithubAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }