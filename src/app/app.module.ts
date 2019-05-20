import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {Deeplinks} from '@ionic-native/deeplinks/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Facebook} from '@ionic-native/facebook/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {Keyboard} from '@ionic-native/keyboard/ngx';
import {MediaCapture} from '@ionic-native/media-capture/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native//file/ngx';
import {Firebase} from '@ionic-native/firebase/ngx';
import {LaunchNavigator} from '@ionic-native/launch-navigator/ngx';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';


import {OpenGraphServiceProvider} from '../app/providers/open-graph-service/open-graph-service';
import {GeoProviderServiceProvider} from '../app/providers/geo-provider-service/geo-provider-service';
import {BaseLinkProvider} from '../app/providers/base-link/base-link';
import {FacebookApiProvider} from '../app/providers/facebook-api/facebook-api';
import {EventProvider} from '../app/providers/event/event';
import {CameraPluginProvider} from '../app/providers/camera-plugin/camera-plugin';
import {HelperProvider} from '../app/providers/helper/helper';
import { ErrorLogServiceProvider } from './providers/error-log-service/error-log-service';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
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
export class AppModule {}
