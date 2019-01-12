import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//les pages
import { HomePage } from '../pages/home/home';
import { accueilPage } from '../pages/accueil/accueil';
import {FormationPage} from "../pages/formation/formation";
import {ProjetPage} from "../pages/projet/projet";
import {BlogPage} from "../pages/blog/blog";
import {ContactPage} from "../pages/contact/contact";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    accueilPage,
    FormationPage,
    ProjetPage,
    BlogPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    accueilPage,
    FormationPage,
    ProjetPage,
    BlogPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
