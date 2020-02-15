import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';
import { AddEntryPage } from '../add-entry/add-entry.page';
import { ModalController } from '@ionic/angular';
import { PreferencesService } from '../services/preferences.service';


@Component({
  selector: 'app-list-tab',
  templateUrl: './list-tab.page.html',
  styleUrls: ['./list-tab.page.scss'],
})
export class ListTabPage implements OnInit {

  /* Optionen für die Darstellung des Erstellungsdatums */
  public options = {
    day: 'numeric',
    month: 'short'
    }

  constructor(public modalController: ModalController, public entriesService: EntriesService, public prefService: PreferencesService){ 
  }

  /* Laden der Tagebucheinträge aus dem Service nach Aufruf der Seite */
  ngOnInit() {
    this.entriesService.load();    
  }

  /* Öffnen des Modals zum Hinzufügen eines neuen Eintrags */
  async newEntry(){
    const modal = await this.modalController.create({
      component: AddEntryPage
    });
    return await modal.present();
  }
}
