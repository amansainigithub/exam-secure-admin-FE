import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlService } from 'src/app/_helpers/authUrlHelper/base-url.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RootCategoryService {

  constructor(private _baseUrl:BaseUrlService,private _http:HttpClient) { }


  createRootCategoryService(rootCategoryForm:any)
  {
    return this._http.post(this._baseUrl.baseUrl+"createRootCategory",rootCategoryForm);
  }

  fetchRootCategoryService()
  {
    return this._http.get(this._baseUrl.baseUrl+"getAllRootCategory");
  }

  removeRootaCategoryService(id:any)
  {
    return this._http.delete(this._baseUrl.baseUrl+"deleteRootCategoryById/"+id);
  }

  getRootCategoryByIdService(id:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"getRootCategoryById/"+id);
  }

  updateRootCategoryService(rootCategoryForm:any)
  {
    return this._http.put(this._baseUrl.baseUrl+"updateRootCategory/",rootCategoryForm);
  }

  root_upload_file_service(file:any,id:any)
  {
    const formData: FormData = new FormData();
    formData.append('file', file);

    var url=this._baseUrl.baseUrl+"uploadRootCategoryFile/"+id;
    return this._http.post(url,formData);
  }
}
