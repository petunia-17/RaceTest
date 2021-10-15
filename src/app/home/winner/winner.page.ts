import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { F1ServiceService } from '../f1-service.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.page.html',
  styleUrls: ['./winner.page.scss'],
})
export class WinnerPage implements OnInit {

  modalTitle: string;
  season: number;
  drivers:any[] =[];

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private f1Service:F1ServiceService
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.season = this.navParams.data.season;
    
    this.f1Service
    .getRaceResults(this.season,1)
    .subscribe((value:any )=> {
      console.log(value.MRData.DriverTable.Drivers);

      this.drivers = value.MRData.DriverTable.Drivers;
    });
  }

  async closeModal() {
    this.f1Service
    .getRaceResults(this.season,1)
    .subscribe(value => {
      console.log(value);
    });
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  gotoUrl(url){
    window.open(url, '_blank');
  }

}
