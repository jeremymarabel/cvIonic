import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Projet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-projet',
  templateUrl: 'projet.html'
})
export class ProjetPage {
	selectedItem: any;
  items: Array<{title: string, lien: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    this.items.push({
        title: 'FindMe',
        lien: 'www.github.com/jeremymarabel/Find-Me-winphone'
      });
    this.items.push({
        title: 'GeoCatching',
        lien: 'www.github.com/LP-IDSE-16-17/dam1617-geo-d-cafeine'
      });
    this.items.push({
        title: 'FindMe Android',
        lien: 'www.github.com/jeremymarabel/IUT_Android'
      });
  }

	itemTapped(event, item) {
		if(item.lien != '') {
			window.open('http://'+item.lien,'_blank');
		}
	}
	ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetPage');
  }
}


  