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

  /* Öffnet Modal zum Hinzufügen eines neuen Tags */
  async addTag() {
    const alert = await this.alertController.create({
      header: 'Create new Tag',
      inputs: [
        {
          name: 'tagname',
          type: 'text',
          placeholder: 'Enter Tag Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Add',
          handler: data => {
            this.tagsService.createTag(data.tagname);
          }
        }
      ]
    })
      await alert.present();
    }

    
    deleteTag(tag: string){
        this.tagsService.deleteTag(tag);
    }
}
