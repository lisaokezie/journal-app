import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEntryPageRoutingModule } from './add-entry-routing.module';

import { AddEntryPage } from './add-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEntryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddEntryPage]
})
export class AddEntryPageModule {}
