import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PreferencesService } from '../services/preferences.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public prefService: PreferencesService, public alertController: AlertController) { 
  }

  /* Lädt den Preferences Service */
  ngOnInit() {
    this.prefService.load();
  }

}
