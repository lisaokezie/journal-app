import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { PreferencesService } from '../services/preferences.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public name;

  constructor(public prefService: PreferencesService, public alertController: AlertController) { 
  this.name = '';
  }

  ngOnInit() {
    this.prefService.loadName();
    console.log(this.prefService.journalname);

    this.name = this.prefService.journalname;
  }

}
