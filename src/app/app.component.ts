import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsContainerComponent } from "./projects/projects-container/projects-container.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProjectsContainerComponent]
})
export class AppComponent {
  title = 'awesome';
}
