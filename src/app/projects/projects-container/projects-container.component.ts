import { Component, OnInit } from '@angular/core';
import { MOCK_PROJECTS } from '../shared/mock-projects';
import { Project } from '../shared/project.model';
import { JsonPipe } from '@angular/common';
import { ProjectListComponent } from "../project-list/project-list.component";
import { ProjectService } from '../shared/project.service';

@Component({
    selector: 'app-projects-container',
    standalone: true,
    templateUrl: './projects-container.component.html',
    styleUrl: './projects-container.component.css',
    imports: [JsonPipe, ProjectListComponent]
})
export class ProjectsContainerComponent implements OnInit {
  projects!: Project[];
  errorMessage: string = "";
  constructor(private projectService: ProjectService){}
  ngOnInit(): void {
    this.projectService.list().subscribe(
{      next: data => {
        this.projects = data;
      },
      error: error => {
        this.errorMessage = error;
      }
}    )
  }
  onSaveListItem(event:any){
    const project: Project = event.item;
    this.projectService.put(project).subscribe({
      next: updatedProject => {
        const index  = this.projects.findIndex(element => element.id === project.id);
        this.projects[index] = updatedProject;
          },
      error: error => {
        this.errorMessage = error;
      }
    });
  }
}
