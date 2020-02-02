import { Component, OnInit } from '@angular/core';

import { PreferencesService } from '../services/preferences.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private prefService: PreferencesService) { }

  ngOnInit() {
  }
}
