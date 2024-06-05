import { Routes } from '@angular/router';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { ProjectsContainerComponent } from './projects/projects-container/projects-container.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeContainerComponent},
    {path: 'projects', component: ProjectsContainerComponent}
];
