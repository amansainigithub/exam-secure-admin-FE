import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlService } from '../_helpers/authUrlHelper/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class FileResourceService {

  constructor(private _baseUrl:BaseUrlService,private _http:HttpClient) { }


  saveFileResource(file:any)
  {
    const formData: FormData = new FormData();
    formData.append('file', file);

    var url=this._baseUrl.baseUrl+"saveFileResource";
    return this._http.post(url,formData);
  }

  //PDF
  getAllFileResource()
  {
    var url=this._baseUrl.baseUrl+"getAllFileResource";
    return this._http.get(url);
  }


}
