import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEntryPageRoutingModule } from './edit-entry-routing.module';

import { EditEntryPage } from './edit-entry.page';

import { EditmodalPageModule } from '../modal/editmodal/editmodal.module';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEntryPageRoutingModule,
    EditmodalPageModule
  ],
  declarations: [EditEntryPage]
})
export class EditEntryPageModule {}