import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [JsonPipe, CurrencyPipe],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {
  @Input()
  projects: Project[] = [];
  constructor(){}
  ngOnInit(): void {
  }

}
