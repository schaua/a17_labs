import { environment } from '../../../environments/environments';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PROJECTS } from './mock-projects';
import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl= environment.backendUrl + '/projects/';
  constructor(private http: HttpClient) { }
  list(): Observable<Project[]>{
    return this.http.get<Project[]>(this.projectsUrl);
  }
}
