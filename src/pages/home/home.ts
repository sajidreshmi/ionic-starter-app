import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { PlacesServices } from '../../services/places';
import { PlacePage } from '../place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private places: {title: string}[] = [];
  constructor(public navCtrl: NavController, private placeService: PlacesServices,
  private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.placeService.getPlaces().then(
      (places)=>{
        this.places = places;
      }
    );
  }
  onLoadNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }
  onLoadPlace() {
    this.modalCtrl.create(PlacePage).present();
  }
}
