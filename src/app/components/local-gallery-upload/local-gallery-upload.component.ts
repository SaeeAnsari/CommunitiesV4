import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

//import { ImagePicker } from '@ionic-native/image-picker';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

import { BaseLinkProvider } from '../../providers/base-link/base-link';
import { LoadingController } from '@ionic/angular';


/**
 * Generated class for the LocalGalleryUploadComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'local-gallery-upload',
  templateUrl: 'local-gallery-upload.component.html',
  styleUrls: ['./local-gallery-upload.component.scss'],
  providers: [File]
})
export class LocalGalleryUploadComponent implements OnInit {

  ngOnInit(): void {
    if (this.Type == "") {
      this.Type = "Story";
    }

    if (this.UploadedImage != "") {
      this.cloudFileURL = this.UploadedImage;

    }

    console.log("local upload image: " + this.cloudFileURL);

    this.SetImageReplaceParam();
  }




  private SetImageReplaceParam() {
    this.replaceIconWithImage = this.UpdateIconImageOnUpload == "true" && this.cloudFileURL.length > 0;
  }


  private file_transfer: FileTransferObject = this.transfer.create();


  @Input() Type: string = "";
  @Input() UpdateIconImageOnUpload: string = "";
  @Input() UploadedImage: string = "";

  @Output() OnFileSaved = new EventEmitter();

  public replaceIconWithImage: boolean = false;
  public cloudFileURL: string = "";


  constructor(
    //private imagePicker: ImagePicker,
    private transfer: FileTransfer,
    private file: File,
    public loadingCtrl: LoadingController
  ) {
    console.log('Hello LocalGalleryUploadComponent Component');

  }

  public imagePickerClick() {

    //this.getImages({ maximumImagesCount: 1 });
    //this.DummyShowImage();
  }

  public DummyShowImage() {

    var fileName = 'http://res.cloudinary.com/http-communities-me/image/upload/v1504497765/l3ofqjfmzzr8xl5lumiq.jpg';



    this.OnFileSaved.emit({
      mediaType: "Image",
      imageList: [{
        id: -1,
        fileName: fileName,
        publicID: "222",
        versionID: "222"
      }]
    });
  }

  /*
  private getImages(options) {
    console.log("Inside the Image Picker");

    this.imagePicker.getPictures(options).then((results) => {
      let loading = this.loadingCtrl.create({
        content: 'Uploading...',
        spinner: 'dots'
      });

      console.log("Showing Results");

      if (results.length > 0 && results[0] == "O") {
        return;
      }

      for (var i = 0; i < results.length; i++) {

        let uri = results[i];

        let options = {
          fileKey: 'file',
          fileName: uri.split('/').pop(),
          mimeType: 'image/jpeg',
          chunkedMode: false,
          headers: {
            'Content-Type': undefined
          },
          params: {}
        };

        loading.present();

        let url = BaseLinkProvider.GetBaseUrl() + "/Image?type=" + this.Type;
        this.file_transfer.upload(
          encodeURI(uri),
          encodeURI(url),
          options,
          false
        ).then(result => {
          var parsingString = result.response;
          var fileName = parsingString.substring(parsingString.indexOf("<FileName>"), parsingString.indexOf("</FileName>")).replace("<FileName>", "");
          var publicID = parsingString.substring(parsingString.indexOf("<PublicID>"), parsingString.indexOf("</PublicID>")).replace("<PublicID>", "");
          var versionID = parsingString.substring(parsingString.indexOf("<VersionID>"), parsingString.indexOf("</VersionID>")).replace("<VersionID>", "")

          console.log("FileName: " + fileName + ", publicID: " + publicID + ", versionID: " + versionID);

          this.cloudFileURL = fileName;
          if (this.cloudFileURL != null) {
            this.cloudFileURL = this.cloudFileURL.replace('/upload/', '/upload/h_60,c_scale/');
          }
          this.SetImageReplaceParam();

          loading.dismiss();

          this.OnFileSaved.emit({
            mediaType: "Image",
            imageList: [{
              id: -1,
              fileName: fileName,
              publicID: publicID,
              versionID: versionID
            }]
          });
        })
          .catch(error => {
            loading.dismiss();
            console.log("FILE TARNSFER ERROR : " + JSON.stringify(error));
          })
      }

    }, (err) => {
      console.log("Image Picker Error: " + JSON.stringify(err));
    });
  }
  */
}
