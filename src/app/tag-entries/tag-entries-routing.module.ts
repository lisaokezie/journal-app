import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagEntriesPage } from './tag-entries.page';

const routes: Routes = [
  {
    path: '',
    component: TagEntriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagEntriesPageRoutingModule {}
