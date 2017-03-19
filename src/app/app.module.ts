import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AccueilPage } from '../pages/accueil/accueil';
import { CvPage } from '../pages/cv/cv';
import { CompetencePage } from '../pages/competence/competence';
import { ProjetPage } from '../pages/projet/projet';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    CvPage,
    CompetencePage,
    ProjetPage,
    ContactPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccueilPage,
    CvPage,
    CompetencePage,
    ProjetPage,
    ContactPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
