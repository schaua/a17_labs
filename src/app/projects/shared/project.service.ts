import { environment } from '../../../environments/environments';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Project } from './project.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

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
  put(project: Project) {
    const url = this.projectsUrl + project.id;
    return this.http.put<Project>(url, project, httpOptions).pipe(
      catchError((error: HttpErrorResponse)=> {
        console.log(error);
        return throwError(() => {new Error("An error occurred updating the project.");
        })
      })
    );
  }
}
