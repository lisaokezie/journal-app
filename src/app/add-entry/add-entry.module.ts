import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEntryPageRoutingModule } from './add-entry-routing.module';

import { AddEntryPage } from './add-entry.page';

import { EditmodalPageModule } from '../modal/editmodal/editmodal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEntryPageRoutingModule,
    EditmodalPageModule,
    ReactiveFormsModule
  ],
  declarations: [AddEntryPage]
})
export class AddEntryPageModule {}
