import { Component, OnInit, Input } from '@angular/core';
import { CityCard } from '../shared/city-card.model';

@Component({
  selector: 'app-tracker-list-item',
  templateUrl: './tracker-list-item.component.html',
  styleUrls: ['./tracker-list-item.component.css']
})
export class TrackerListItemComponent implements OnInit {
  @Input()
  cityCard: CityCard;
  constructor() {}

  ngOnInit() {
  }

}

