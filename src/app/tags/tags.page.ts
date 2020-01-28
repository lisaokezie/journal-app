import { Component, OnInit } from '@angular/core';

import { TagsService } from '../services/tags.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss'],
})
export class TagsPage implements OnInit {

  constructor(public tagsService: TagsService, public alertController: AlertController) { }
  
  ngOnInit() {
    this.tagsService.load();
  }

  async addTag() {
    const alert = await this.alertController.create({
      header: 'New Tag',
      inputs: [
        {
          name: 'tagname',
          type: 'text',
          placeholder: 'Enter Tag name '
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel');
          }
        }, {
          text: 'Add',
          handler: data => {
            console.log(data.tagname);
            this.tagsService.createTag(data.tagname);
          }
        }
      ]
    })
      await alert.present();
    }

    deleteTag(tag: string){
        this.tagsService.deleteTag(tag);
        console.log('Tag wurde gelöscht');
    }
}