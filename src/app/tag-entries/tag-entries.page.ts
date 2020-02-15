import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';
import { ActivatedRoute } from '@angular/router';

import { TagsService } from '../services/tags.service';
import { Entry } from '../interfaces/entry';

@Component({
  selector: 'app-tag-entries',
  templateUrl: './tag-entries.page.html',
  styleUrls: ['./tag-entries.page.scss'],
})
export class TagEntriesPage implements OnInit {

  public filtered;

  public tag;

  public options = {
    day: 'numeric',
    month: 'short'
    }

  constructor(public tagsService: TagsService, public entriesService: EntriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tagsService.load();

    this.entriesService.load();

    this.tag = this.route.snapshot.paramMap.get('tag');

    /* Filtert die Einträge nach dem übergebenen Tag */
    const filter = this.tag;
    this.filtered = this.entriesService.entries.filter((entry) => {
      if(entry.tags != null){
        return (entry.tags.includes(filter));
      }
    });
  }
}
