import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }
  onCancelClick(event: Event) {
    event.preventDefault();
  }
    
}
