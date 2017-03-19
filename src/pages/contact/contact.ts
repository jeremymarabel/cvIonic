import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
	selectedItem: any;
  items: Array<{title: string, note: string, lien: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    this.items.push({
        title: 'Linkedin',
        note: 'www.linkedin.com',
        lien: 'www.linkedin.com/in/j%C3%A9r%C3%A9my-marabel-948967124/'
      });
	this.items.push({
		title: 'Email',
		note: 'jeremy.marabel@gmail.com',
		lien: ''
	});
	this.items.push({
		title: 'Téléphone',
		note: '0626195309',
		lien: ''
	});
  }

	itemTapped(event, item) {
		if(item.lien != '') {
			window.open('http://'+item.lien,'_blank');
		}
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
