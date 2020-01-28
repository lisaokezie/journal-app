import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagEntriesPageRoutingModule } from './tag-entries-routing.module';

import { TagEntriesPage } from './tag-entries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagEntriesPageRoutingModule
  ],
  declarations: [TagEntriesPage]
})
export class TagEntriesPageModule {}
