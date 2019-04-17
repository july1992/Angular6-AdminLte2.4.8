import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {CookieService} from 'ngx-cookie-service';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import {HeaderComponent} from './components/admin/header/header.component';
import {LeftSideComponent} from './components/admin/left-side/left-side.component';
import { SystemManageComponent } from './components/admin/content/system-manage/system-manage.component';
import { WorkComponent } from './components/admin/content/work/work.component';
import { EditDialogComponent } from './components/admin/ui/edit-dialog/edit-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSideComponent,
    AdminComponent,
    SystemManageComponent,
    WorkComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
