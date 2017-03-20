import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  items: FirebaseListObservable<any>;



  constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {

    this.items = angFire.database.list('/Items');

  }

//  totalAmount(): any {

//    let total: number = 0;

//  let listOFAmount: any = this.items;

//    listOFAmount.forEach(function(i: any): any {

//    total += i.amount;

//    return total;

//  })

//  }



  addItem(): void {

    let prompt = this.alertCtrl.create({
      title: 'Member Details',
      message: 'Enter Your Name, Description, Date and Amount',
      inputs: [{
        name: 'amount',
        placeholder: 'Money Spent',
        type: 'number'
      },
        {
          name: 'date',
          placeholder: 'Date',
          type: 'date'

        },
        {
          name: 'description',
          placeholder: 'event what happened',
          type: 'text'
        },
        {
          name: 'team_member',
          placeholder: 'Members Name',
          type: 'text'
        }
      ],

      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: "Save Details",
          handler: data => {

            this.items.push({
              amount: data.amount,
              date: data.date,
              description: data.description,
              team_member: data.team_member
            });
          }
        }
      ]
    });

    prompt.present();
  }


  editMember(item): void {

    let prompt = this.alertCtrl.create({
      title: 'Edit Member',
      message: 'Edit Name, Description, Date and Amount',
      inputs: [{
        name: 'amount',
        placeholder: 'item.amount'
      },
        {
          name: 'date',
          placeholder: 'item.date'
        },
        {
          name: 'description',
          placeholder: 'item.description'
        },
        {
          name: 'team_member',
          placeholder: 'item.team_member'
        }
      ],

      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: "Save Details",
          handler: data => {
            let newAmount: Number = item.amount;
            let newDate: Number = item.date;
            let newDescription: String = item.description;
            let newTeamMember: String = item.TeamMember;


            if (data.amount != "") {
              newAmount = data.amount;
              console.log(newAmount);
            }

            if (data.date != "") {
              newDate = data.date;
            }

            if (data.description != "") {
              newDescription = data.description;
            }

            if (data.team_member != "") {
              newTeamMember = data.team_member;
            }

            this.items.update(item.$key, {

              amount: data.amount,
              date: newDate,
              description: newDescription,
              team_member: newTeamMember

            });
          }
        }
      ]
    });

    prompt.present();
  }

  deleteMember(itemID): void {
    let prompt = this.alertCtrl.create({
      title: 'Delete Member',
      message: 'Delete Your Name, Description, Date and Amount',
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: "Delete",
          handler: data => {
            this.items.remove(itemID);
          }
        }
      ]
    });

    prompt.present();
  }


}
