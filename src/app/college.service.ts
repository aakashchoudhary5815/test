import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { college } from './models/college';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  mailChimpEndpoint = 'https://gmail.us17.list-manage.com/subscribe/post-json?u=bc6bf018e55f809165183c6e7&amp;id=7eebf996d3';

  private BASE_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  getCollegeList(): Observable<college[]>{
    return this.http.get<college[]>(`${this.BASE_URL}/college`);
  }

  getFilteredCollegeList(type: string, value: string): Observable<college[]>{
    return this.http.get<college[]>(`${this.BASE_URL}/college/${type}/${value}`);
  }

  getCollege(id: string): Observable<college>{
    return this.http.get<college>(`${this.BASE_URL}/college/${id}`);
  }
  
  getFilters() {
    return this.http.get(`${this.BASE_URL}/filters`);
  }

  createcontactdb(data): Observable<any> {
    let url = `${this.BASE_URL}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

// Managing Errors

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


  subscribeToList(search: string) {
    const params = new HttpParams()
      .set('EMAIL', search);

      const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
      return this.http.jsonp(mailChimpUrl, 'c')
  }

}

