import { Component, OnInit } from '@angular/core';
import {Student} from '../../../../bean/student';
import {HttpClient} from '@angular/common/http';
import {AdminService} from '../../../../service/admin.service';

@Component({
  selector: 'app-system-manage',
  templateUrl: './system-manage.component.html',
  styleUrls: ['./system-manage.component.css']
})
export class SystemManageComponent implements OnInit {
  // students: Student[];
  teacher_id = 'b1324076-441a-4a03-b682-c30a790865f2';
  selectorStudent: Student ;
  page = 0;
  count = 0;
  students: any;
  constructor(
    private http: HttpClient,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this .adminService.getSutdents(this.teacher_id, this .page).subscribe(
      RequestData => {
       if ( RequestData.state ) {
         console.log( RequestData.data);
          this.students =  RequestData.data;
         this.count = RequestData.count  ;

       }
    }
    );
  }
  editDialog(student: Student): void {
    this.selectorStudent = student;
    console.log('-----学生卡号ID' + student . cardId);
  }

}
