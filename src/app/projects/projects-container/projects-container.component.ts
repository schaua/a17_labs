import { Component, OnInit } from '@angular/core';
import { MOCK_PROJECTS } from '../shared/mock-projects';
import { Project } from '../shared/project.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-projects-container',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './projects-container.component.html',
  styleUrl: './projects-container.component.css'
})
export class ProjectsContainerComponent implements OnInit {
  projects: Project[] = MOCK_PROJECTS;
  constructor(){}
  ngOnInit(): void {
  }

}
