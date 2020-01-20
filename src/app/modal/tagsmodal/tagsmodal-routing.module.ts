import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagsmodalPage } from './tagsmodal.page';

const routes: Routes = [
  {
    path: '',
    component: TagsmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsmodalPageRoutingModule {}
