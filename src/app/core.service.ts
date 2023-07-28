import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  url = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  user(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/user_show/' + id);
  }

  userPost(data: object): Observable<any> {
    return this.http.post<any>(this.url + '/user_post', data);
  }
  userPut(id: number, data: object): Observable<any> {
    return this.http.put<any>(this.url + '/user_put/' + id, data);
  }

  userDelete(id: number): Observable<any> {
    return this.http.put<any>(`${this.url}/${'user_delete'}/${id}`, null);
  }

  getUser(): Observable<any> {
    return this.http.get<any>(this.url + '/users');
  }

  getCourse(): Observable<any> {
    return this.http.get<any>(this.url + '/courses');
  }

  course(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/course_show/' + id);
  }

  coursePost(data: object): Observable<any> {
    return this.http.post<any>(this.url + '/course_post', data);
  }

  coursePut(id: number, data: object): Observable<any> {
    return this.http.put<any>(this.url + '/course_put/' + id, data);
  }

  courseDelete(id: number): Observable<any> {
    return this.http.put<any>(`${this.url}/${'course_delete'}/${id}`, null);
  }

  getUserType(): Observable<any> {
    return this.http.get<any>(this.url + '/user_types');
  }
}
