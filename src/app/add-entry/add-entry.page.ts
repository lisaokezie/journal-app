import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { EntriesService } from '../services/entries.service';
import { Entry } from '../interfaces/entry';
import { FormGroup, FormControl, FormBuilder, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
export class AddEntryPage implements OnInit {

  public formGroup: FormGroup;
  
  entry: Entry;
  title: string = '';
  content: string = '';
  location: string = '';

  constructor(private route: ActivatedRoute, private entriesService: EntriesService, private navCtrl: NavController) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      location: new FormControl()
    })

   }

  ngOnInit() {
  }

  addEntry(entry: Entry){
    this.entriesService.saveEntry(entry);
  }


}