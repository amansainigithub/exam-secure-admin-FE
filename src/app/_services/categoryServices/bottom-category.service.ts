import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlService } from 'src/app/_helpers/authUrlHelper/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class BottomCategoryService {

  constructor(private _baseUrl:BaseUrlService,private _http:HttpClient) { }


  createBottomCategoryService(bottomCategoryForm:any)
  {
    return this._http.post(this._baseUrl.baseUrl+"createBottomCategory",bottomCategoryForm);
  }

  fetchBottomCategoryService()
  {
    return this._http.get(this._baseUrl.baseUrl+"getAllBottomCategory");
  }

  deleteBottomCategoryByIdService(bottomCategoryId:any)
  {
    return this._http.delete(this._baseUrl.baseUrl+"deleteBottomCategoryById/"+bottomCategoryId);
  }

  getBottomCategoryByIdService(bottomCategoryId:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"getBottomCategoryById/"+bottomCategoryId);
  }


  updateBottomCategoryService(bottomCategoryForm:any)
  {
    return this._http.put(this._baseUrl.baseUrl+"updateBottomCategory",bottomCategoryForm);
  }

 
}
