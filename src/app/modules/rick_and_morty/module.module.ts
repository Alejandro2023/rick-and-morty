import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { RoutingModuleModule } from './routing-module.module';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';
import { LocationListComponent } from './location/locations-list/location-list.component';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeListComponent } from './episode/episodes-list/episode-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RoutingModuleModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserComponent,
    UserFormComponent,
    CourseComponent,
    UserListComponent,
    CourseListComponent,
    CourseFormComponent,
    CharacterComponent,
    CharacterListComponent,
    LocationComponent,
    LocationListComponent,
    EpisodeComponent,
    EpisodeListComponent,
  ],
  declarations: [
    UserComponent,
    CourseComponent,
    UserFormComponent,
    UserListComponent,
    CourseListComponent,
    CourseFormComponent,
    CharacterComponent,
    CharacterListComponent,
    LocationComponent,
    LocationListComponent,
    EpisodeComponent,
    EpisodeListComponent,
  ],
})
export class ModuleModule {}
