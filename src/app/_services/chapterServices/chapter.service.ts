import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrlService } from 'src/app/_helpers/authUrlHelper/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private _baseUrl:BaseUrlService,private _http:HttpClient) { }

  saveChapter(chapterForm:any)
  {
    return this._http.post(this._baseUrl.baseUrl+"createChapter",chapterForm);
  }

  getAllChapters()
  {
    return this._http.get(this._baseUrl.baseUrl+"getAllChapters");
  }

  deleteChapterById(chapterId:any)
  {
    return this._http.delete(this._baseUrl.baseUrl+"deleteChapterById/"+chapterId);
  }

  getChapterById(chapterId:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"getChapterById/"+chapterId);
  }

  updateChapter(chapterForm:any)
  {
    return this._http.put(this._baseUrl.baseUrl+"updateChapter",chapterForm);
  }

  getChaptersByBranchId(branchId:any)
  {
    return this._http.get(this._baseUrl.baseUrl+"getChaptersByBranchId/"+branchId);
  }

  
}
