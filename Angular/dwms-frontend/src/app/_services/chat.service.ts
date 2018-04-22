/*
  Basic service for chat application which defines
  the '.on' commands which tie into the server's 
  predefined action attributes.
*/
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private url = 'http://174.138.38.245:5000';
  private socket;

  constructor() { }

  //.emit allows for custom event
  sendMessage(message){
    //Send the message model (Object)
    this.socket.emit('add-message', message);   
  }

  //.on is the decision structure for the incoming .emit event
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);   
      });
      return () => {
        this.socket.disconnect();
      }; 
    })    
    return observable;
  } 
}