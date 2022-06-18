import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlService } from '../_helpers/authUrlHelper/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class RootToEndService {

  constructor(private _baseUrl:BaseUrlService,private _http:HttpClient) { }

  getRootCategoryByIdService(key:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"searchByRootCategoryKey/"+key);
  }

}
