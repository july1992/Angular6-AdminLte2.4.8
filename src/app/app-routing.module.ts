import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemManageComponent} from './components/admin/content/system-manage/system-manage.component';
import {WorkComponent} from './components/admin/content/work/work.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
