import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
    selector: 'app-project-list',
    standalone: true,
    templateUrl: './project-list.component.html',
    styleUrl: './project-list.component.css',
    imports: [ProjectCardComponent]
})
export class ProjectListComponent implements OnInit {
  @Input()
  projects: Project[] = [];
  constructor(){}
  ngOnInit(): void {
  }

}
