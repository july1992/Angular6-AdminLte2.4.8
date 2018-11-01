import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../service/admin.service';
import {Login} from '../../bean/login';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // bodyClasses = 'skin-blue sidebar-mini';
  // body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  constructor(
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {
    // this.body.classList.add('skin-blue');
    // this.body.classList.add('sidebar-mini');
  }
  login(phone: string , psw: string): void {
    phone = phone.trim();
    psw = psw.trim();
    if (!phone) {
      alert ( '用户名 不能为空') ;
      return;
    }
    if (!psw) {
      alert ( '密码不能为空') ;
      return;
    }
    console.log('-------' + phone + '----------' + psw );
    this.adminService.login({phone , psw} as Login )
      .subscribe(requetData => {
        if (requetData.state) {
          console.log(requetData.message);
          // this.router.navigateByUrl('/admin');
          // window.open('http://localhost:4200/admin/admin-home');
          window.location.href = 'http://localhost:4200/admin/admin-home ';
        } else {
          alert(requetData.message);
        }
      });
  }

}
