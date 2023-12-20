import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera'

@Injectable({
  providedIn: 'root'
})
export class CamaraServiceService {

  constructor() { }

  takePicture=async() =>{
    const image=await Camera.getPhoto({
      quality:90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  }
}
