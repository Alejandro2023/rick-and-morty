import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'course',
        component: CourseComponent,
      },
      {
        path: '**',
        redirectTo: 'user',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModuleModule {}
