import { Component } from '@angular/core';
import { NavController, ModalController, Modal } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { PlacesServices } from '../../services/places';
import { PlacePage } from '../place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private places: {title: string}[] = [];
  dataFromModal: any;
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
    this.navCtrl.push(NewPlacePage, {
      data: {
        title: "Add a new place",
      }
    });
  }
  onLoadPlace(place) {
    let data = {title: `This is place - ${place.title}`};
    let modal: Modal =this.modalCtrl.create(PlacePage, data);
    modal.onWillDismiss((data) => {
      // This is going to be executed when the modal is closed, so
      // you can get the data here
      this.dataFromModal = data;
    });
    modal.present();
  }
}
