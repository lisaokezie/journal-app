import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTabPageRoutingModule } from './list-tab-routing.module';

import { ListTabPage } from './list-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTabPageRoutingModule
  ],
  declarations: [ListTabPage]
})
export class ListTabPageModule {}
