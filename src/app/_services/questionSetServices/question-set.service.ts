import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlService } from 'src/app/_helpers/authUrlHelper/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionSetService {

  constructor(private _baseUrl:BaseUrlService,private _http:HttpClient) { }

  saveQuestionSet(questionSetForm:any)
  {
    return this._http.post(this._baseUrl.baseUrl+"saveQuestionSet",questionSetForm);
  }

  getAllQuestionSet()
  {
    return this._http.get(this._baseUrl.baseUrl+"getAllQuestionSet");
  }


  removeQuestionSetByIdService(questionSetId:any)
  {
    return this._http.delete(this._baseUrl.baseUrl+"deleteQuestionSetById/"+questionSetId);
  }

  getQuestionSetById(questionSetId:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"getQuestionSetById/"+questionSetId);
  }

  updateQuestionSet(questionSetForm:any)
  {
    return this._http.put(this._baseUrl.baseUrl+"updateQuestionSet",questionSetForm);
  }

  getQuestionSetByChapterId(chapterId:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"getQuestionSetByChapterId/"+chapterId);
  }

questionSet_upload_file_service(file:any,id:any)
  {
    const formData: FormData = new FormData();
    formData.append('file', file);

    var url=this._baseUrl.baseUrl+"uploadQuestionSetFile/"+id;
    return this._http.post(url,formData);
  }
}
