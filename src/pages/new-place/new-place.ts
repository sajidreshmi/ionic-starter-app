import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesServices } from '../../services/places';
import { Geolocation } from '@ionic-native/geolocation';
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
  location: any;
  title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private placeService: PlacesServices, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
    this.title = this.navParams.data.data.title;
  }
  addNewPlace(value: {title: string}) {
    this.placeService.addPlaces(value);
    this.navCtrl.pop();
  }
  onLocateUser() {
    this.geolocation.getCurrentPosition().then((location) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log("location fetched");
      
      this.location = location;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
