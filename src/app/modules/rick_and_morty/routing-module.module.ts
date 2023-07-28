import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'character',
        component: CharacterComponent,
      },
      {
        path: 'location',
        component: LocationComponent,
      },
      {
        path: 'episode',
        component: EpisodeComponent,
      },
      {
        path: '**',
        redirectTo: 'character',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModuleModule {}
