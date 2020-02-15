import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { EditmodalPage } from '../modal/editmodal/editmodal.page';

import { EntriesService } from '../services/entries.service';
import { Entry } from '../interfaces/entry';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
export class AddEntryPage implements OnInit {
  
  entry: Entry;
  
  constructor(public entriesService: EntriesService, public modalController: ModalController) {

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
  }

  addEntry(entry: Entry){
    this.entriesService.saveEntry(entry);
    this.modalController.dismiss();
  }

  closeModal(){
    this.modalController.dismiss();
  }

  
  /* 
  Öffnet das Modal zum Bearbeiten und gibt die Eigenschaften des aktuellen Eintrags an das Modal weiter.
  Beim Schließen werden die entsprechenden Eigenschaften überschrieben.
  */
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