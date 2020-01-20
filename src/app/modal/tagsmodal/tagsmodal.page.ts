import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tagsmodal',
  templateUrl: './tagsmodal.page.html',
  styleUrls: ['./tagsmodal.page.scss'],
})
export class TagsmodalPage implements OnInit {

  title;
  tags;

  constructor(private modalController: ModalController ) { }

  ngOnInit() {
    // this.passedTitle = this.navParams.get('title');
    // this.passedTags= this.navParams.get('tags');

    console.log(this.tags);
  }

  closeModal(){
    this.modalController.dismiss({
      'dismissed': true
   });
  }

}
