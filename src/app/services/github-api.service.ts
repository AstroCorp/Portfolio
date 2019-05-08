import { Injectable } from '@angular/core';
import { Repository } from '../models/repository';
import { HttpClient } from '@angular/common/http';
import { License } from '../models/license';

@Injectable({
  providedIn: 'root'
})

export class GithubAPIService
{
  private url_repo = 'https://api.github.com/users/AstroCorp/repos';
  private url_license = 'https://api.github.com/licenses/';

  constructor(private http: HttpClient) { }

  getRepositories()
  {
    return this.http.get<Repository[]>(this.url_repo);
  }

  getLicense(name: string)
  {
    return this.http.get<License>(this.url_license + name);
  }
}
