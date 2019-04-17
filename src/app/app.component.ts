import {Component, OnChanges, OnInit} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {AdminService} from './service/admin.service';
import {CookieService} from 'ngx-cookie-service';
import {Router, Routes} from '@angular/router';


export const appUrl = 'http://localhost:8020/';
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  WithCredentials: true
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  title = 'angularstart7';
  showLogin = true;

  constructor(
    private adminService: AdminService,
    private cookieService: CookieService
  ) {

  }

  ngOnInit() {
    this.initparam();
  }

  initparam() {
    let uid = this.cookieService.get('uid');
    // uid 为空的话  当前页面 不为空的话  跳转到主页
    if (uid) {
      this.body.classList.add('skin-blue');
      this.body.classList.add('sidebar-mini');
      this.showLogin = false;
    }
  }

  login(number: string, psw: string): void {
    var self = this;
    number = number.trim();
    psw = psw.trim();
    if (!number) {
      alert('学号不能为空');
      return;
    }
    if (!psw) {
      alert('密码不能为空');
      return;
    }


    this.adminService.login(number, psw)
      .subscribe(requetData => {
        if (requetData && (requetData as any).code == 0) {

          console.log(requetData.message);
          requetData.data;
          self.cookieService.set('uid', (requetData as any).data.id);
          self.cookieService.set('userName', (requetData as any).data.userName);

          window.location.reload();

        } else {
          alert(requetData.message);

        }
      });
  }
}
