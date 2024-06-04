import { Component, OnInit } from '@angular/core';
import { MOCK_PROJECTS } from '../shared/mock-projects';
import { Project } from '../shared/project.model';
import { JsonPipe } from '@angular/common';
import { ProjectListComponent } from "../project-list/project-list.component";

@Component({
    selector: 'app-projects-container',
    standalone: true,
    templateUrl: './projects-container.component.html',
    styleUrl: './projects-container.component.css',
    imports: [JsonPipe, ProjectListComponent]
})
export class ProjectsContainerComponent implements OnInit {
  projects: Project[] = MOCK_PROJECTS;
  constructor(){}
  ngOnInit(): void {
  }
  onSaveListItem(event: any){
    const project: Project = event.item;
    const index  = this.projects.findIndex(element => element.id === project.id);
    this.projects[index] = project;
  }
}
