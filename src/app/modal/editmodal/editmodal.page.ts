import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TagsService } from '../../services/tags.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.page.html',
  styleUrls: ['./editmodal.page.scss'],
})
export class EditmodalPage implements OnInit {

  title;
  tags;
  location;
  isFavorite;

  constructor(private modalController: ModalController, private tagsService: TagsService, public alertController: AlertController) { }


  ngOnInit() {
    this.tagsService.load();
  }

  closeModal(){
    this.modalController.dismiss({
      tags: this.tags,
      location: this.location,
      isFavorite: this.isFavorite
   });
  }


  async addLocation() {
    const alert = await this.alertController.create({
      header: 'Add Location',
      inputs: [
        {
          name: 'location',
          type: 'text',
          placeholder: 'Enter sth here',
          value: this.location
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
            this.location = data.location;
          }
        }
      ]
    })
      await alert.present();
    }

}
