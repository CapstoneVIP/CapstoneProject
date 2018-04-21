//Routing
import { dashboardRoutes } from "./dashboard.routes";

//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { RouterModule } from "@angular/router";

//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(dashboardRoutes),
    LeafletModule.forRoot(),
  ],
  declarations: [
  	DashboardComponent, 
  	HomeComponent, 
  	AdminComponent,  
  	LeafletComponent,
    ChatComponent
  	]
})
export class DashboardModule { }
