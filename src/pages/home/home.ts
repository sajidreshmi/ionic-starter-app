import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { PlacesServices } from '../../services/places';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private places: {title: string}[] = [];
  constructor(public navCtrl: NavController, private placeService: PlacesServices) {

  }

  ionViewWillEnter() {
    this.places = this.placeService.getPlaces();
  }
  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }
}
