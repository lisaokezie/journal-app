import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagsmodalPageRoutingModule } from './tagsmodal-routing.module';

import { TagsmodalPage } from './tagsmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagsmodalPageRoutingModule
  ],
  declarations: [TagsmodalPage]
})
export class TagsmodalPageModule {}
