import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-tagsmodal',
  templateUrl: './tagsmodal.page.html',
  styleUrls: ['./tagsmodal.page.scss'],
})
export class TagsmodalPage implements OnInit {

  title;
  tags;

  constructor(private modalController: ModalController, private tagsService: TagsService ) { }

  ngOnInit() {
    // this.passedTitle = this.navParams.get('title');
    // this.passedTags= this.navParams.get('tags');

    this.tagsService.load();
    console.log(this.tags);
    console.log(this.tagsService.tags);

  }

  closeModal(){
    this.modalController.dismiss({
      tags: this.tags,
   });
  }

  

}
