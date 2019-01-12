import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


/**
 * Generated class for the ProjetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet',
  templateUrl: 'projet.html',
})
export class ProjetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetPage');
  }
  // meme generatore
  doAlert_meme() {
    let alert = this.alerCtrl.create({
      title: 'Description !',
      subTitle: '<img src="../../assets/imgs/meme.PNG"  />',
      message: ' Meme Generator est un service générateur de meme. Le principe consiste à ajouter du texte sur une image et ensuite de télécharger l\'image modifiée.Ce projet à été réalisé par une équipe de 4 développeurs en 7 jours.  ',
      buttons: ['Ok']
    });
    alert.present()
  }
  //annuaire de film
  doAlert_film() {
    let alert = this.alerCtrl.create({
      title: 'Description !',
      subTitle: '<img src="../../assets/imgs/zone.PNG"  />',
      message: ' CinéZone est un annuaire de film réalisé par 4 développeurs en 4 jours. Sur ce projet, l\'utilisateur peut suivre l\'actualité sur les nouveaux films, il peut aussi voir les details sur un film précis.',
      buttons: ['Ok']
    });
    alert.present()
  }
  //Space invedeuur
  doAlert_space() {
    let alert = this.alerCtrl.create({
      title: 'Description !',
      subTitle: '<img src="../../assets/imgs/space.PNG"  />',
      message: ' Space Invaders est un jeu rétro qui simule une invasion allien. Ce projet a été réalisé en pur JavaScript par une équipe de 4 développeurs.',
      buttons: ['Ok']
    });
    alert.present()
  }
  //transfert de fichier
  doAlert_trans() {
    let alert = this.alerCtrl.create({
      title: 'Description !',
      subTitle: '<img src="../../assets/imgs/trans.PNG"  />',
      message: ' AAYO est un service de transfert de fichier en ligne. Il a été développé par une équipe (4 développeurs) en 5 jours. ',
      buttons: ['Ok']
    });
    alert.present()
  }

}
