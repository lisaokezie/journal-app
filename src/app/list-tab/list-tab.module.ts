import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListTabPageRoutingModule } from './list-tab-routing.module';

import { ListTabPage } from './list-tab.page';
import { AddEntryPageModule } from '../add-entry/add-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTabPageRoutingModule,
    AddEntryPageModule,
    RouterModule.forChild([{ path: '', component: ListTabPage }])
  ],
  declarations: [ListTabPage]
})
export class ListTabPageModule {}
