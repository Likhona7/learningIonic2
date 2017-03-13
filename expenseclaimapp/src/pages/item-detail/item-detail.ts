import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the ItemDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})

export class ItemDetailPage {

        date;
        team_member;
        description;
        amount;

  constructor(public navParams: NavParams) {

  }

  ionViewDidLoad() {
          this.date = this.navParams.get('item').date;
          this.team_member = this.navParams.get('item').team_member;
          this.description = this.navParams.get('item').description;
          this.amount = this.navParams.get('item').amount
  }

}
