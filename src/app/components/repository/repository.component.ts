import { Component, OnInit, Input } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit
{
  @Input() repository: Repository;

  constructor() { }

  ngOnInit() { }

}
