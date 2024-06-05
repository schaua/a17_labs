import { environment } from '../../../environments/environments';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Project } from './project.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl= environment.backendUrl + '/projects/';
  constructor(private http: HttpClient) { }
  list(): Observable<Project[]>{
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      catchError( 
        (error: HttpErrorResponse) => {
          console.log(error);
          return throwError(() => new Error("An error occurred loading the projects."));
      }
      )
    );
  }
}
