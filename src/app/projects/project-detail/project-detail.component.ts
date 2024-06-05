import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../shared/project.model';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  imports:[CurrencyPipe, DatePipe]
})
export class ProjectDetailComponent implements OnInit {
  @Input()
  project: Project | undefined;

  constructor() {}

  ngOnInit() {}
}
