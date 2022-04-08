import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlService } from 'src/app/_helpers/authUrlHelper/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private _baseUrl:BaseUrlService,private _http:HttpClient) { }


  createSubCategoryService(subCategoryForm:any)
  {
    return this._http.post(this._baseUrl.baseUrl+"createSubCategory",subCategoryForm);
  }

  fetchSubCategoryService()
  {
    return this._http.get(this._baseUrl.baseUrl+"getAllSubCategory");
  }

 
  removeSubCategoryService(subCategoryId:any)
  {
    return this._http.delete(this._baseUrl.baseUrl+"deleteSubCategoryById/"+subCategoryId);
  }

  getSubCategoryByIdService(subCategoryId:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"getSubCategoryById/"+subCategoryId);
  }

  updateSubCategoryService(subCategoryForm:any)
  {
    return this._http.put(this._baseUrl.baseUrl+"updateSubCategory/",subCategoryForm);
  }

  getSubCategoriesByRootCategoryId(rootCategoryId:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"getSubCategoriesByRootCategoryId/"+rootCategoryId);
  }
  
}
