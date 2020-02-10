import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
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

  sliderConfig = {
    spaceBetween: 12,
    slidesPerView: 1.4,
    slideShadows: false,
    centeredSlides: false
  };

  private options = {
    day: 'numeric',
    month: 'short'
    }

  constructor(public modalController: ModalController, public entriesService: EntriesService, private navCtrl: NavController, private prefService: PreferencesService){ 
  }

  ngOnInit() {
    this.entriesService.load();    
  }

  async newEntry(){
    const modal = await this.modalController.create({
      component: AddEntryPage
    });
    return await modal.present();
  }
}
