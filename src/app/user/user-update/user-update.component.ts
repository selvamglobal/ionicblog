import { Component, OnInit } from '@angular/core';
import { ModalController } from '../../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
  updatePhotoURL(event){
    console.log(event);
  }
save(){

}
cancel() {
  this.modalController.dismiss();

}
}
