import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import {HeaderComponent} from './components/admin/header/header.component';
import {LeftSideComponent} from './components/admin/left-side/left-side.component';
import {HttpClientModule} from '@angular/common/http';
import { SystemManageComponent } from './components/admin/content/system-manage/system-manage.component';
import { WorkComponent } from './components/admin/content/work/work.component';
import { EditDialogComponent } from './components/admin/ui/edit-dialog/edit-dialog.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSideComponent,
    LoginComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
