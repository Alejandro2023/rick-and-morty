import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  url = 'http://127.0.0.1:8000/api';
  urlRickAndMortyAPI = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient, private router: Router) {}

  login(data: object) {
    this.http.post<any>(this.url + '/login', data).subscribe((r) => {
      this.router.navigate(['user']);
    });
  }

  logout() {
    return localStorage.removeItem('token');
  }

  user(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/user_show/' + id);
  }

  userPost(data: object): Observable<any> {
    return this.http.post<any>(this.url + '/user_post', data);
  }

  userCoursePost(data: object): Observable<any> {
    return this.http.post<any>(this.url + '/user_course_post', data);
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

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.urlRickAndMortyAPI + '/character');
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get<any>(this.urlRickAndMortyAPI + '/character/' + id);
  }

  getLocations(): Observable<any> {
    return this.http.get<any>(this.urlRickAndMortyAPI + '/location');
  }

  getLocation(id: number): Observable<any> {
    return this.http.get<any>(this.urlRickAndMortyAPI + '/location/' + id);
  }

  getEpisodes(): Observable<any> {
    return this.http.get<any>(this.urlRickAndMortyAPI + '/episode');
  }

  getEpisode(id: number): Observable<any> {
    return this.http.get<any>(this.urlRickAndMortyAPI + '/episode/' + id);
  }
}
