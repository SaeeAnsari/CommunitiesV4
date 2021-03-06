import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { NavController, NavParams, ModalController } from '@ionic/angular';
//import { NativeStorage } from '@ionic-native/native-storage';
import {Storage} from '@ionic/storage';

import { Observable } from 'rxjs/Rx';
import { UserService } from '../../providers/user-service';

import { MediaPostService } from '../../providers/media-post-service';

/**
 * Generated class for the RegisterUserComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'register-user-component',
  templateUrl: 'register-user-component.component.html',
  styleUrls: ['./register-user-component.component.scss'],
  providers: [UserService, MediaPostService]
})
export class RegisterUserComponent {

  public registerationForm: FormGroup;
  private id: number;
  private isUploadingImage: boolean = false;
  private uploaded: boolean = false;
  private selfieURL: string = "";
  private passwordMatch: boolean = true;


  constructor(private _fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private _userService: UserService,
    private _mediaPost: MediaPostService,
    public vc: ModalController,
    private storage: Storage) {
    this.registerationForm = this._fb.group({
      firstName: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
      lastName: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
      email: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, <any>Validators.minLength(6)]]
    });
  }

  fileChange(event) {

    this.isUploadingImage = true;

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);


      this._mediaPost.postImage(formData, 'User').subscribe(sub => {
        this.uploaded = true;
        this.isUploadingImage = false;

        this.selfieURL = sub;
      });
    }
  }

  saveUser(model, isValid: boolean) {
    this.passwordMatch = model.password == model.confirmPassword;

    if (isValid && isValid == true) {
      if (this.passwordMatch) {
        if (this.selfieURL != "") {
          model.imageURL = this.selfieURL;
        }

        model.authenticationPortalID = 1;//Custom
        this._userService.RegisterUser(model).subscribe(sub => {
          this.id = +sub;
          this.storage.set("userID", this.id);
          sessionStorage.setItem('userID', this.id.toString());
          let data = {
            id: this.id
          };

          this.vc.dismiss(data);

        });
      }
    }
  }


  mediaSelectedForPosting(data) {

    console.log("inside the imageSelectedForPosting");
    if (data != null) {
      console.log("Got Data: " + JSON.stringify(data));

      if (data.mediaType == "Image") {

        data.imageList.forEach(element => {

          this.selfieURL = element.fileName;
        });
      }
    }
  }


  closeModal() {
    this.vc.dismiss();
  }

}
