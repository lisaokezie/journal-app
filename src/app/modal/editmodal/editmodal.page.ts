import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TagsService } from '../../services/tags.service';


@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.page.html',
  styleUrls: ['./editmodal.page.scss'],
})
export class EditmodalPage implements OnInit {

  title;
  tags;

  constructor(private modalController: ModalController, private tagsService: TagsService ) { }


  ngOnInit() {

    this.tagsService.load();
    console.log(this.tags);
    console.log(this.tagsService.tags);

  }

  closeModal(){
    this.modalController.dismiss({
      tags: this.tags,
   });
  }

}
