export class PlacesServices {
    private places: {title: string}[] = [];

    addPlaces(place: {title: string}) {
        this.places.push(place);
    }

    getPlaces() {
        return this.places.slice();
    }
}