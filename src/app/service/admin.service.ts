import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {RequestData} from '../bean/RequestData';
import {catchError, tap} from 'rxjs/operators';
import {appUrl, httpOptions} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private heroesUrl = appUrl+'student/user/';

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
  login(number:string,psw:string ): Observable<RequestData> {
    const urlLogin = this.heroesUrl + 'login'+'?number='+number+'&psw='+psw ;
    return this.http.get(urlLogin, httpOptions).pipe(
      tap(_ => this.log(`登录的用户名 number=${number}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  getSutdents(number: string, page: number ): Observable<RequestData> {
    const urlStudents = this.heroesUrl + 'getStudents' + '?number=' + 20190417001 + '&page=' + page;
    // const data = {userName : teacher_id};
    //
    console.log('------urlStudents' + urlStudents);
    return this.http.get<RequestData>(urlStudents, httpOptions).pipe(
      tap(_ => this.log(`登录的用户名 phone=${number}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
}
