import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Project } from '../shared/project.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent implements OnInit {
  @Input()
  project!: Project;
  @Output()
  cancel = new EventEmitter<void>();
  @Output()
  save = new EventEmitter<any>();

  projectForm: FormGroup = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(this.project.name,[
        Validators.required,
        Validators.minLength(3)
      ]),
      description: new FormControl(this.project.description),
      budget: new FormControl(this.project.budget),
      isActive: new FormControl(this.project.isActive)
    });
  }
  onCancelClick(event: Event) {
    event.preventDefault();
    this.cancel.emit();
  }
  onSubmit() {
    if (this.projectForm.invalid){
      return;
    }
    const updatedProject = {
      ...this.project,
      ...this.projectForm.value
    };
    this.save.emit({project: updatedProject});
  }
    
}
