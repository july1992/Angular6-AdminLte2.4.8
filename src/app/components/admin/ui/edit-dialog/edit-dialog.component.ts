import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../../../bean/student';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  @Input()student: Student;
  constructor() { }

  ngOnInit() {
  }
  saveEditEvent(student: Student ): void {
    console.log('----------上传新的student 并且刷新列表');
  }
}
