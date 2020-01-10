import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTabPage } from './list-tab.page';

const routes: Routes = [
  {
    path: '',
    component: ListTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTabPageRoutingModule {}
