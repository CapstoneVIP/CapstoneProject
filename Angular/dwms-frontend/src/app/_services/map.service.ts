import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RequestMethod } from "@angular/http";
import { Location } from "../_models/location.model";
import { ApiHandler } from "./api-handler.service";
import { Coords } from "../_models/coords.model";
import { Observable } from "rxjs";
import * as L from "leaflet";

@Injectable()
export class MapService {

  public map: L.Map;
  public marker: L.Marker;    //Single Marker for updating shuttle location
  public flag: boolean;       //IF true, ADD a new Marker, ELSE UPDATE that marker

  constructor(private _apiHandler: ApiHandler, private http: HttpClient) {
    //Marker control logic
    this.flag = true;
  }

  //API call
  getShuttleCoords(id: number): Observable<Coords> {
    return this._apiHandler.callService("/shuttle/getShuttleCoords", RequestMethod.Get, {id: id})
    .map(res => <Coords>res.json());
  }

  //Marker decison logic, insserts a new marker, then updates that single marker ONLY
  markerDecision () {
    //API call /shuttle/getShuttleCoords
    this.getShuttleCoords(215)
      .subscribe((coords) => {
         if(this.flag) {
           this.marker = this.addMarker(coords.latitude, coords.longitude);
           this.map.panTo(this.marker.getLatLng());
           this.flag = false;
         }
         else {
           this.updateMarker(coords.latitude, coords.longitude);
           this.map.panTo(this.marker.getLatLng());
         }
      }, (error)=> {
        console.error("Shuttle coordinate error", error);
      });
  }

  //Updates a single marker
  private updateMarker(lat, lng) {
    const shortLat = Math.round(lat * 1000000) / 1000000;
    const shortLng = Math.round(lng * 1000000) / 1000000;

    const popup = `<div>Floater Shuttle</div><div>Latitude: ${shortLat}<div><div>Longitude: ${shortLng}<div>`;
    const icon = L.icon({
      iconUrl: "assets/shuttleIcon.png",
      //shadowUrl: "assets/marker-shadow.png"
    });

    this.marker
        .bindPopup(popup, {
          offset: L.point(12,6)
        })
        .addTo(this.map)
        .openPopup();

    const newLatLng = new L.LatLng(shortLat, shortLng);
    this.marker.setLatLng(newLatLng);
  }

  //Inserts a marker, returns that marker to set the local 'marker'
  private addMarker(lat, lng) {
      const shortLat = Math.round(lat * 1000000) / 1000000;
      const shortLng = Math.round(lng * 1000000) / 1000000;
  
      //Setting the pop up parameters, anchor sets it absolute regardless of zoom
      const popup = `<div>Floater Shuttle</div><div>Latitude: ${shortLat}<div><div>Longitude: ${shortLng}<div>`;
      const icon = L.icon({
        iconUrl: "assets/shuttleIcon.png",
        iconSize: [46,37],
        iconAnchor: [12,36],
        popupAnchor:[0,-32],
    });

    const marker = L.marker(L.latLng(lat, lng), {
      icon
    })
      .bindPopup(popup, {
        offset: L.point(12, 6)
      })
      .addTo(this.map)
      .openPopup();

    return marker;
  }
}
