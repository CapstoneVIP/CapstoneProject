import { Component } from '@angular/core';

import { latLng, LatLng, tileLayer, marker, polyline, icon } from 'leaflet';

import { LeafletModel } from '../../_models/leaflet.model';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
})
export class LeafletComponent {
 
// Define our base layers so we can reference them multiple times
  osmMaps = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
  });
 
  // Marker for the top of Mt. Ranier
  center_marker = marker([ 41.247106, -96.016764], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  /* Path from paradise to summit - most points omitted from this example for brevity
  route = polyline([[ 46.78465227596462,-121.74141269177198 ],
    [ 46.80047278292477, -121.73470708541572 ],
    [ 46.815471360459924, -121.72521826811135 ],
    [ 46.8360239546746, -121.7323131300509 ],
    [ 46.844306448474526, -121.73327445052564 ],
    [ 46.84979408048093, -121.74325201660395 ],
    [ 46.853193528950214, -121.74823296256363 ],
    [ 46.85322881676257, -121.74843915738165 ],
    [ 46.85119913890958, -121.7519719619304 ],
    [ 46.85103829018772, -121.7542376741767 ],
    [ 46.85101557523012, -121.75431755371392 ],
    [ 46.85140013694763, -121.75727385096252 ],
    [ 46.8525277543813, -121.75995212048292 ],
    [ 46.85290292836726, -121.76049157977104 ],
    [ 46.8528160918504, -121.76042997278273 ]]);
    */

  // Layers control object with our two base layers and the three overlay layers
  layersControl = {
    baseLayers: {
      'osmMaps': this.osmMaps,
    },
    overlays: {
      'center_marker': this.center_marker,
    }
  };


  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [ this.osmMaps, this.center_marker],
    zoom: 17,
    center: latLng([ 41.247106, -96.016764])
  };

}