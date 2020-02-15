import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AddEntryPage } from '../add-entry/add-entry.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalController: ModalController) {}

  /* Öffnet Modal zum Hinzufügen eines neuen Eintrags */
  async newEntry(){
    const modal = await this.modalController.create({
      component: AddEntryPage
    });
    return await modal.present();
  }
}
