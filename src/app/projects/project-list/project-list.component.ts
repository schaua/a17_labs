import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [JsonPipe],
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
