import { Component, OnInit } from '@angular/core';
import { CityCard } from '../shared/city-card.model'
import { TrackerService } from '../tracker.service';
import { CardBackground } from '../shared/card-background.enum';

@Component({
  selector: 'app-tracker-container',
  templateUrl: './tracker-container.component.html',
  styleUrls: ['./tracker-container.component.css']
})
export class TrackerContainerComponent implements OnInit {
  cityCardList: CityCard[] = [new CityCard(1,'Louisville',CardBackground.RED)];
  cityCardList2: CityCard[] = [];
  discardPileTitle = 'Discard Pile';

  infectionDeckTitle = 'Infection Deck';

  constructor(private trackerService: TrackerService) {}

  ngOnInit() {
    // this.trackerService.list().subscribe(data => {
    //   this.cityCardList = data;
    // });
    // this.trackerService.list().subscribe(data => {
    //   this.cityCardList2 = data;
    // });
  }


}
