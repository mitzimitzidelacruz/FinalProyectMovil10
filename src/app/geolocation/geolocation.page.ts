import { Component, OnInit} from '@angular/core';
declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number
  }
  title: string
}

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  //public map: any = google.maps.Map;

  map = null

  markers: Marker[] = [
    {
      position: {
        lat: 21.8719786,
        lng: -102.3206999,
      },
      title: 'Cenaduría El Antojito Sur'
    },
    {
      position: {
        lat: 21.8719786,
        lng: -102.3206999,
      },
      title: 'La Plazoela'
    },
    {
      position: {
        lat: 21.8917508,
        lng: -102.3240658,
      },
      title: 'Cenaduria La Quinta'
    },
    {
      position: {
        lat: 21.873621,
        lng: -102.3113993,
      },
      title: 'Cenaduria Esthela'
    },
    {
      position: {
        lat: 21.8790194,
        lng: -102.3286341,
      },
      title: 'Lechón Rudy'
    }
  ];

  constructor() {}

  ngOnInit() {
    this.loadMap()
  }

  loadMap(){
    const mapEle: HTMLElement = document.getElementById('map')
    const myLatLng = {lat: 21.891165, lng: -102.265913}

    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    })

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map')
    })
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker){
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    })
  }
}