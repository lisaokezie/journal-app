import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { EntriesService } from '../services/entries.service';


@Component({
  selector: 'app-list-tab',
  templateUrl: './list-tab.page.html',
  styleUrls: ['./list-tab.page.scss'],
})
export class ListTabPage implements OnInit {

  constructor(public entriesService: EntriesService, private navCtrl: NavController){ 

  }

  ngOnInit() {
    this.entriesService.load();    
  }
}
