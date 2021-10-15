import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';
import { HomePageRoutingModule } from './home-routing.module';
import { WinnerPageModule } from './winner/winner.module';
import { F1ServiceService } from './f1-service.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    WinnerPageModule,
    HttpClientModule
  ],
  declarations: [HomePage],
  providers:[F1ServiceService]
})
export class HomePageModule {}
