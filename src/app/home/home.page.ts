import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WinnerPage } from './winner/winner.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  seasons:number[] =[];
  startYear:number =2005;
  endYear:number = 2021;
  dataReturned: any;
  constructor( public modalController: ModalController) {}
  ngOnInit(): void {
    this.setSeasonsArray()
  }

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
