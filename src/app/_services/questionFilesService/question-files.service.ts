import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlService } from 'src/app/_helpers/authUrlHelper/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionFilesService {

  constructor(private _baseUrl:BaseUrlService,private _http:HttpClient) { }


  question_files_upload(file:any,id:any)
  {
    const formData: FormData = new FormData();
    formData.append('file', file);

    var url=this._baseUrl.baseUrl+"uploadQuestionFiles/"+id;
    return this._http.post(url,formData);
  }

  getQuestionsFilesByQuestionAnswerId(id:any)
  {
    var url=this._baseUrl.baseUrl+"getQuestionsFilesByQuestionAnswerId/"+id;
    return this._http.get(url);
  }


  deleteQuestionFileById(id:any)
  {
    var url=this._baseUrl.baseUrl+"deleteQuestionFileById/"+id;
    return this._http.delete(url);
  }


}
