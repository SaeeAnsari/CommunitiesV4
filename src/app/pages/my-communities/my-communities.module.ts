import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyCommunitiesPage } from './my-communities.page';

const routes: Routes = [
  {
    path: '',
    component: MyCommunitiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyCommunitiesPage]
})
export class MyCommunitiesPageModule {}
