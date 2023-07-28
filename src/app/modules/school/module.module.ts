import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { RoutingModuleModule } from './routing-module.module';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, RoutingModuleModule],
  exports: [
    UserComponent,
    UserFormComponent,
    CourseComponent,
    UserListComponent,
    CourseListComponent,
    CourseFormComponent,
    LoginComponent,
  ],
  declarations: [
    UserComponent,
    CourseComponent,
    UserFormComponent,
    UserListComponent,
    CourseListComponent,
    CourseFormComponent,
    LoginComponent,
  ],
})
export class ModuleModule {}
