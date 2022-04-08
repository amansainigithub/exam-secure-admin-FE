import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlService } from 'src/app/_helpers/authUrlHelper/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {

  constructor(private _baseUrl:BaseUrlService,private _http:HttpClient) { }


  saveQuestionAnsersService(queationAnswerForm:any)
  {
    return this._http.post(this._baseUrl.baseUrl+"saveQuestionAnswer",queationAnswerForm);
  }


  getAllQuestionAnswer()
  {
    return this._http.get(this._baseUrl.baseUrl+"getAllQuestionAnswer");
  }

  deleteQuestionAnswerById(id:any)
  {
    return this._http.delete(this._baseUrl.baseUrl+"deleteQuestionAnswerById/"+id);
  }

  getQuestionAnswerById(id:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"getQuestionAnswerById/"+id);
  }

  updateQuestionAnsersService(queationAnswerForm:any)
  {
    return this._http.put(this._baseUrl.baseUrl+"updateQuestionAnswer",queationAnswerForm);
  }

  getQuestionAnswerByQuestionSetId(id:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"getQuestionAnswerByQuestionSetId/"+id);
  }


}
