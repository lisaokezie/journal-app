import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { EntriesService } from '../services/entries.service';
import { Entry } from '../interfaces/entry';
import { ModalController } from '@ionic/angular';
import { EditmodalPage } from '../modal/editmodal/editmodal.page';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.page.html',
  styleUrls: ['./edit-entry.page.scss'],
})

/* Diese Seite ermöglicht das Bearbeitzen der Einträge */
export class EditEntryPage implements OnInit {

  public entry: Entry;

  constructor(private route: ActivatedRoute, public entriesService: EntriesService, public navCtrl: NavController, public modalController: ModalController) {

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

  /* 
  Verwendet die übergebene id aus der Route und lädt mithilfe 
  der Funktion 'getEntry' den entsprechenden Eintrag 
  */
  ngOnInit() {
    let entryId = this.route.snapshot.paramMap.get('id');

    if(this.entriesService.loaded){
      this.entry = this.entriesService.getEntry(entryId);
    } else{
      this.entriesService.load().then(() => {
        this.entry = this.entriesService.getEntry(entryId)
      });
    }
  }

  /* 
  Öffnet das Modal zum Bearbeiten und gibt die Eigenschaften des aktuellen Eintrags an das Modal weiter.
  Beim Schließen werden die entsprechenden Eigenschaften überschrieben.
  */
  async openEditModal(){
    const modal = await this.modalController.create({
      component: EditmodalPage,
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
