import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { UserUpdateComponent } from '../user-update/user-update.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  constructor(public modalcontroller: ModalController) { }

  ngOnInit() {
  }

  async update() {
    const modal = await this.modalcontroller.create({
      component: UserUpdateComponent
    });
    return modal.present();
  }

}
