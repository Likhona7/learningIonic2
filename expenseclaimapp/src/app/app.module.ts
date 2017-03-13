import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfileData } from '../providers/profile-data';
import { ListPage } from '../pages/list/list';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ProfilePage } from '../pages/profile/profile';
import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {

   apiKey: "AIzaSyB5rIdcbKD46ZoC-Jv69R-_9yN45WNzock",
   authDomain: "expense-claim-626c6.firebaseapp.com",
   databaseURL: "https://expense-claim-626c6.firebaseio.com",
   storageBucket: "expense-claim-626c6.appspot.com",
   messagingSenderId: "1000212870176"


}



@NgModule({
  declarations: [
    MyApp,
    ListPage,
    AddItemPage,
    ItemDetailPage,
    ProfilePage,
  ],

  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)

  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    AddItemPage,
    ItemDetailPage,
    ProfilePage,

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  ProfileData
  ]
})
export class AppModule {}
