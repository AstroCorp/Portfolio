import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubAPIService } from './services/github-api.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ListRepositoriesComponent } from './components/list-repositories/list-repositories.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';
import { FixRepositoryNamePipe } from './pipes/fix-repository-name.pipe';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        ListRepositoriesComponent,
        RepositoryComponent,
        ErrorComponent,
        AboutComponent,
        FixRepositoryNamePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MDBBootstrapModule.forRoot(),
        FontAwesomeModule
    ],
    providers: [GithubAPIService],
    bootstrap: [AppComponent]
})

export class AppModule { }
