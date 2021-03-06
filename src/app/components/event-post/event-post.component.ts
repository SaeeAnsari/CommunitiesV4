import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';


/**
 * Generated class for the EventPostComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'event-post',
  templateUrl: 'event-post.component.html',
  styleUrls: ['./event-post.component.scss'],
  providers: [InAppBrowser]
})
export class EventPostComponent implements OnInit {
  
  ngOnInit(): void {
    
    if(this.EventStartDate != ""){
      if(this.EventEndDate == this.EventStartDate || this.EventEndDate == ""){
                
        let dtStart= new Date(this.EventStartDate);        
        this.dateString = dtStart.getMonth() + '/' + dtStart.getDate() + '/' + dtStart.getFullYear();        
      }

      else if(this.EventStartDate != this.EventEndDate && this.EventEndDate != ""){
        let dtStart= new Date(this.EventStartDate);
        let dtEnd = new Date(this.EventEndDate);
        
        this.dateString = dtStart.getMonth() + '/' + dtStart.getDate() + '/' + dtStart.getFullYear() + ' to ' + dtEnd.getMonth() + '/' + dtEnd.getDate()  + '/' + dtEnd.getFullYear();
      }      
    }

  }

  @Input() Address: string;
  @Input() City: string;
  @Input() PostMessage: string;
  @Input() PostMediaURL: string;
  @Input() EventID: number;
  @Input() UserID: number;
  @Input() StoryExternalURL: string;
  @Input() ImageURL;
  @Input() EventStartDate;
  @Input() EventEndDate;

  public fixedImagesforStory;

  public dateString: string = "";


  constructor(
    private iab: InAppBrowser,
    private launchNavigator: LaunchNavigator
    
  ) { }


  viewCommentsClicked() {
  }


  //Type : Video or Image
  openComments() {
    if (this.StoryExternalURL != "") {
      this.iab.create(this.StoryExternalURL);
    }
  }

  launchMaps(){

    console.log("Event Address: " + this.Address);

    this.launchNavigator.navigate(this.Address).then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
    
    //window.open("http://maps.google.com?daddr=" + this.Address + "+" + this.City);
  }
}
