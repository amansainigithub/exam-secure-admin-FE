import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlService } from 'src/app/_helpers/authUrlHelper/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private _baseUrl:BaseUrlService,private _http:HttpClient) { }

  savebranch(branchForm:any)
  {
    return this._http.post(this._baseUrl.baseUrl+"createBranch",branchForm);
  }

  getAllBranchService()
  {
    return this._http.get(this._baseUrl.baseUrl+"getAllBranch");
  }

  getBranchByIdService(id:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"getBranchById/"+id);
  }

  updatebranchService(branchForm:any)
  {
    return this._http.post(this._baseUrl.baseUrl+"updateBranch",branchForm);
  }

  deleteBranchByIdService(branchId:any)
  {
    return this._http.delete(this._baseUrl.baseUrl+"deleteBranchById/"+branchId);
  }

}
