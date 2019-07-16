import { Component, OnInit } from '@angular/core';
import { GithubAPIService } from 'src/app/services/github-api.service';
import { Repository } from 'src/app/models/repository';

@Component({
    selector: 'app-list-repositories',
    templateUrl: './list-repositories.component.html',
    styleUrls: ['./list-repositories.component.scss']
})

export class ListRepositoriesComponent implements OnInit
{
    public repositories: Repository[] = [];

    constructor(public github: GithubAPIService) { }

    ngOnInit()
    {
        this.github.getRepositories().subscribe((data: Repository[]) => this.repositories = data);
    }
}
