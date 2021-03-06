import { Component, OnInit } from '@angular/core';
import {  NavController, NavParams } from '@ionic/angular';
import { UserService } from '../../providers/user-service';
import { User } from '../../interfaces/user';

import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms'
import { LiveFeedPage } from '../live-feed/live-feed.page';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.page.html',
  styleUrls: ['./user-search.page.scss'],
})
export class UserSearchPage implements OnInit {
  private communityID: number = -1;

  private userItems: User[] = [];
  searchVal: string;
  searchInput = new FormControl();

  private nextPageIndex: number = 1;


  constructor(private userService: UserService, public navCtrl: NavController, public navParams: NavParams) {

    this.searchVal = "";
    if (navParams.get('communityID')) {
      this.communityID = navParams.get('communityID');
    }
  }

  initialBindUsers() {

    this.userItems = [];

    if (this.searchVal == undefined)
      this.searchVal = '';

    this.userService.GetAllActiveUsers(this.searchVal, this.communityID, this.nextPageIndex)
      .subscribe(list => {


        this.nextPageIndex = this.nextPageIndex + 1;

        list.forEach(element => {

          var user = {
            id: element.ID,
            firstName: element.FirstName,
            lastName: element.LastName,
            active: element.Active,
            authenticationPortalID: element.AuthenticationPortalID,
            imageURL: element.ImageURL,
            alreadyMember: element.AlreadyMember,
            email: element.Email
          };

          this.userItems.push(user);
        });

      });
  }

  reBindUserList() {

    this.userItems = [];

    if (this.searchVal == undefined)
      this.searchVal = '';




    this.userService.GetAllActiveUsers(this.searchVal, this.communityID, this.nextPageIndex - 1)
      .subscribe(list => {

        list.forEach(element => {

          var user = {
            id: element.ID,
            firstName: element.FirstName,
            lastName: element.LastName,
            active: element.Active,
            authenticationPortalID: element.AuthenticationPortalID,
            imageURL: element.ImageURL,
            alreadyMember: element.AlreadyMember,
            email: element.Email
          };

          this.userItems.push(user);
        });
      });
  }

  bindUserList_Paging(): Promise<any> {


    return new Promise((resolve) => {
      setTimeout(() => {

        this.userItems = [];

        if (this.searchVal == undefined)
          this.searchVal = '';

        this.userService.GetAllActiveUsers(this.searchVal, this.communityID, this.nextPageIndex)
          .subscribe(list => {

            if (list.length > 0) {
              this.nextPageIndex = this.nextPageIndex + 1;
            }
            //reset back to 1  when all items are exhausted
            else if (list.length == 0 && this.nextPageIndex > 0) {
              this.nextPageIndex = 1;
              this.initialBindUsers();
            }

            list.forEach(element => {

              var user = {
                id: element.ID,
                firstName: element.FirstName,
                lastName: element.LastName,
                active: element.Active,
                authenticationPortalID: element.AuthenticationPortalID,
                imageURL: element.ImageURL,
                alreadyMember: element.AlreadyMember,
                email: element.Email
              };

              this.userItems.push(user);
            });

          });

        resolve();
      }, 500);
    })
  }

  ngOnInit() {
    this.nextPageIndex = 1;
    this.initialBindUsers();

  }

  userAddedorRemoved() {
    this.reBindUserList();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSearchComponent');
    this.searchInput.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(va => {
        this.nextPageIndex = 1;
        this.initialBindUsers();
      });
  }

  navigateToFeed() {
    this.navCtrl.navigateBack('/live-feed');
  }
}
