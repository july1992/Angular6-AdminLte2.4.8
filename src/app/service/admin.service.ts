import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {RequestData} from '../bean/RequestData';
import {catchError, tap} from 'rxjs/operators';
import {Login} from '../bean/login';
import {Student} from '../bean/student';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private heroesUrl = 'http://192.168.43.151:8089/vily/';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  login(login: Login ): Observable<RequestData> {
    const urlLogin = this.heroesUrl + 'login' ;
    return this.http.post(urlLogin, login, httpOptions).pipe(
      tap(_ => this.log(`登录的用户名 phone=${login.phone}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  getSutdents(teacher_id: string, page: number ): Observable<RequestData> {
    const urlStudents = this.heroesUrl + 'getStudents' + '?teacher_id=' + teacher_id + '&page=' + page;
    // const data = {userName : teacher_id};
    //
    console.log('------urlStudents' + urlStudents);
    return this.http.get<RequestData>(urlStudents, httpOptions).pipe(
      tap(_ => this.log(`登录的用户名 phone=${teacher_id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
}
