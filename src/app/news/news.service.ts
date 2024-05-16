import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:3000/news';

  constructor(private http: HttpClient) {
  }

  // getNews(): Observable<any> {return this.http.get(this.apiUrl);} //Brug denne for at se databasen displayed.

 getNews(): Observable<News[]> {
    const username = 'user';
    const password = 'pass';
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    });

    return this.http.get<News[]>(this.apiUrl, {headers: headers});
  }
}


