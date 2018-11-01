import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AppComponent} from './app.component';
import {AdminComponent} from './components/admin/admin.component';
import {SystemManageComponent} from './components/admin/content/system-manage/system-manage.component';
import {WorkComponent} from './components/admin/content/work/work.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin-home',
        pathMatch: 'full'
      },
      {
        path: 'admin-home',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'manage',
            pathMatch: 'full'
          },
          {
            path: 'manage',
            component: SystemManageComponent,
          },
          {
            path: 'work',
            component: WorkComponent,
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
