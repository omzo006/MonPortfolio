import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { accueilPage } from '../accueil/accueil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  private showaccueil(){
      this.navCtrl.push(accueilPage);

  }
}
