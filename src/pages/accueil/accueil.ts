import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// importation des pages
import {FormationPage} from "../formation/formation";
import {BlogPage} from "../blog/blog";
import {ProjetPage} from "../projet/projet";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class accueilPage {

   constructor(public navCtrl: NavController){

   }
  private showformation(){
    this.navCtrl.push(FormationPage);

  }
    private showblog(){
        this.navCtrl.push(BlogPage);

    }
    private showprojet(){
        this.navCtrl.push(ProjetPage);

    }
    private showcontact(){
        this.navCtrl.push(ContactPage);

    }
}
