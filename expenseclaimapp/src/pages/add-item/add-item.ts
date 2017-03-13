import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

    date;
    team_member;
    description;
    amount;



  constructor(public navCtrl: NavController, public view: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

        saveItem(){

        let newItem = {
        date : this.date,
        team_member : this.team_member,
        description : this.description,
        amount : this.amount
        };

        this.view.dismiss(newItem)

        }
        close(){
        this.view.dismiss();
        }
}
