import { Component, OnInit } from '@angular/core';
import {Student} from '../../../../bean/student';
import {HttpClient} from '@angular/common/http';
import {AdminService} from '../../../../service/admin.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-system-manage',
  templateUrl: './system-manage.component.html',
  styleUrls: ['./system-manage.component.css']
})
export class SystemManageComponent implements OnInit {
  // students: Student[];
  // teacher_id = 'b1324076-441a-4a03-b682-c30a790865f2';
  selectorStudent: Student ;
  page = 0;
  count = 0;
  students: any;
  constructor(
    private http: HttpClient,
    private adminService: AdminService,
    private cookieService:CookieService
  ) { }

  ngOnInit() {

    let number = this.cookieService.get("number");

    this.getStudent(number);

  }

  getStudent(number : string){
    this .adminService.getSutdents(number, this .page).subscribe(
      requetData => {
        if ( requetData && (requetData as any).code==0) {
          console.log( requetData.data);
          this.students =  requetData.data;
          // this.count = requetData.count  ;

        }
      }
    );
  }
  editDialog(student: Student): void {
    this.selectorStudent = student;
    console.log('-----学生卡号ID' + student . cardId);
  }
  addStudent(){
    console.log('-----添加一个学生');
  }
}
