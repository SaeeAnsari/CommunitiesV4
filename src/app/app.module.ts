import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native//file/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


import { OpenGraphServiceProvider } from '../app/providers/open-graph-service/open-graph-service';
import { GeoProviderServiceProvider } from '../app/providers/geo-provider-service/geo-provider-service';
import { BaseLinkProvider } from '../app/providers/base-link/base-link';
import { FacebookApiProvider } from '../app/providers/facebook-api/facebook-api';
import { EventProvider } from '../app/providers/event/event';
import { CameraPluginProvider } from '../app/providers/camera-plugin/camera-plugin';
import { HelperProvider } from '../app/providers/helper/helper';
import { ErrorLogServiceProvider } from './providers/error-log-service/error-log-service';
import { TabsPage } from './pages/tabs/tabs.page';

import { CreateTopicComponent } from '../app/components/create-topic/create-topic.component';
import { ForgetPasswordComponent } from '../app/components/forget-password/forget-password.component';
import { LoginComponent } from '../app/components/login-component/login-component.component';
import { MarkerNewPostComponent } from '../app/components/marker-new-post-component/marker-new-post-component.component';
import { NewCommentComponent } from '../app/components/new-comment-component/new-comment-component.component';
import { NewEventComponent } from '../app/components/new-event/new-event.component';
import { RegisterUserComponent } from '../app/components/register-user-component/register-user-component.component';
import { SocialSharingPopoverComponent } from '../app/components/social-sharing-popover/social-sharing-popover.component';
import { UserCommentsComponent } from '../app/components/user-comments-component/user-comments-component.component';
import { UserPostsComponent } from '../app/components/user-posts-component/user-posts-component.component';
import { ViewTopicsComponent } from '../app/components/view-topics/view-topics.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateTopicComponent,
    ForgetPasswordComponent,
    LoginComponent,
    MarkerNewPostComponent,
    NewCommentComponent,
    NewEventComponent,
    RegisterUserComponent,
    SocialSharingPopoverComponent,
    UserCommentsComponent,
    UserPostsComponent,
    ViewTopicsComponent
  ],
  entryComponents: [
    AppComponent,    
    CreateTopicComponent,
    ForgetPasswordComponent,
    LoginComponent,
    MarkerNewPostComponent,
    NewCommentComponent,
    NewEventComponent,
    RegisterUserComponent,
    SocialSharingPopoverComponent,
    UserCommentsComponent,
    UserPostsComponent,
    ViewTopicsComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Deeplinks,
    Geolocation,
    OpenGraphServiceProvider,
    GeoProviderServiceProvider,
    BaseLinkProvider,
    ErrorLogServiceProvider,
    Facebook,
    FacebookApiProvider,
    EventProvider,
    Camera,
    Keyboard,
    MediaCapture,
    FileTransfer,
    File,
    CameraPluginProvider,
    HelperProvider,
    Firebase,
    LaunchNavigator,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
