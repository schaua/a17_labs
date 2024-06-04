import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../shared/project.model';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { ProjectFormComponent } from "../project-form/project-form.component";

@Component({
    selector: 'app-project-list',
    standalone: true,
    templateUrl: './project-list.component.html',
    styleUrl: './project-list.component.css',
    imports: [ProjectCardComponent, ProjectFormComponent]
})
export class ProjectListComponent implements OnInit {
onCancel() {
  this.editingProject =  null;
}
  @Input()
  projects: Project[] = [];
  editingProject : Project | null = null;
  @Output()
  saveListItem = new EventEmitter<any>();
  
  constructor(){}
  ngOnInit(): void {
  }
  onEdit(event: any){
    this.editingProject = event.editingProject;
    console.log(this.editingProject);
  }
  onSave(event: any){
    this.editingProject = null;
    this.saveListItem.emit({item: event.project});
  }

}
