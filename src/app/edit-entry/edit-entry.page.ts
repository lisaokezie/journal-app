import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const { Geolocation } = Plugins;

import { EntriesService } from '../services/entries.service';
import { Entry } from '../interfaces/entry';

import { TagsService } from '../services/tags.service';

import { ModalController } from '@ionic/angular';

import { EditmodalPage } from '../modal/editmodal/editmodal.page';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.page.html',
  styleUrls: ['./edit-entry.page.scss'],
})
export class EditEntryPage implements OnInit {

  public entry: Entry;

  photo: SafeResourceUrl;

  //public location: String;


  constructor( private route: ActivatedRoute, private entriesService: EntriesService, private navCtrl: NavController, public modalController: ModalController) {

    this.entry = {
      id: '',
      title: '',
      date: new Date(),
      content: '',
      tags: [],
      location: '',
      isFavorite: false
    }
   }

  ngOnInit() {
    let entryId = this.route.snapshot.paramMap.get('id');

    if(this.entriesService.loaded){
      this.entry = this.entriesService.getEntry(entryId);
    } else{
      this.entriesService.load().then(() => {
        this.entry = this.entriesService.getEntry(entryId)
      });
    }

    // Beim laden wird isFavorite geprüft und je nach Status die Farbe des Buttons festgelegt
    // if(this.entriesService.getStatus(this.entry)){
    //   this.buttonColor = this.likeColor;
    // }else{
    //   this.buttonColor = this.unlikeColor;
    // }
  }

  //Kamera
  // async takePicture() {
  //   const image = await Plugins.Camera.getPhoto({
  //     quality: 100,
  //     allowEditing: false,
  //     resultType: CameraResultType.DataUrl,
  //     source: CameraSource.Camera
  //   });

  //   this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  // }

 // Edit Modal
  async openEditModal(){
    const modal = await this.modalController.create({
      component: EditmodalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        title: this.entry.title,
        tags: this.entry.tags,
        location: this.entry.location,
        isFavorite: this.entry.isFavorite
      }
    });

    modal.onDidDismiss()
      .then((data) => {
        const tags = data['data'].tags;
        const location = data['data'].location;
        const isFavorite = data['data'].isFavorite;  
        this.entry.isFavorite = isFavorite;
        this.entry.tags = tags;
        this.entry.location = location;
        this.entriesService.save();
      });
    return await modal.present();
  }


}
