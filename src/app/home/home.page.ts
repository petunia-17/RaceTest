import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { WinnerPage } from './winner/winner.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //variables
  seasons:number[] =[];
  startYear:number =2005;
  endYear:number = 2021;
  dataReturned: any;
  rangeValue:string;

  constructor( public modalController: ModalController) {

    
    
  }
  // the method inside  runs first
  ngOnInit(): void {
    this.setSeasonsArray()
  }

  //method used to displays the years 
  setSeasonsArray(){
    for(let i=this.startYear;i<=this.endYear;i++){
      this.seasons.push(i);
    }

    console.log(this.seasons);
    
  }


  
  async openModal(season:number) {
    const modal = await this.modalController.create({
      component: WinnerPage,
      componentProps: {
        "season": season,
        "paramTitle": ""
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }


}
