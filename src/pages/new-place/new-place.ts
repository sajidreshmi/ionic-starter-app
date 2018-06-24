import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesServices } from '../../services/places';

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private placeService: PlacesServices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }
  addNewPlace(value: {title: string}) {
    this.placeService.addPlaces(value);
    this.navCtrl.pop();
  }
}
