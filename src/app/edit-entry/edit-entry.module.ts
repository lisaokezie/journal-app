import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEntryPageRoutingModule } from './edit-entry-routing.module';

import { EditEntryPage } from './edit-entry.page';

import { TagsmodalPageModule } from '../modal/tagsmodal/tagsmodal.module';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEntryPageRoutingModule,
    TagsmodalPageModule
  ],
  declarations: [EditEntryPage]
})
export class EditEntryPageModule {}