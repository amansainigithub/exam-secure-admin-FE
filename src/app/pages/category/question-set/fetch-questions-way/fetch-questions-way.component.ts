import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';

@Component({
  selector: 'app-fetch-questions-way',
  templateUrl: './fetch-questions-way.component.html',
  styleUrls: ['./fetch-questions-way.component.css']
})
export class FetchQuestionsWayComponent implements OnInit {

  constructor(private _chapter:ChapterService,
    private _bcs:BottomCategoryService,
    private _shs:SnackbarHelperService,
    private _branch:BranchService,
    private _qs:QuestionSetService) { }


    progressBar:any ={
      dynamicValue:false
    }
  

  ngOnInit(): void {
    //bottomList
    this.fetchBottomCategoryData();
  }


  bottomCategoryList:any;
  public fetchBottomCategoryData()
  {
      //progress-bar-start
      this.progressBarStart();

      this._bcs.fetchBottomCategoryService().subscribe(data=>{
         this.bottomCategoryList=data;
         console.log(data);
          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
  }



  //selectBottomCategory
  selectBottomCategory(e:any)
  {
   e.target.value;
   this.selectBranchByBottomCategoryId(e.target.value);
  }


  //selectBranchByBottomCategoryId
branchList:any;
selectBranchByBottomCategoryId(bottomCategoryId:any)
{
    //progress-bar-start
      this.progressBarStart();

        this._branch.getBranchListByBottomCategoryId(bottomCategoryId).subscribe(data=>{
        this.branchList=data;
        
        console.log(data);
          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
}


selectBranchCategory(e:any)
{
  this.getChapterListByBranchId(e.target.value);
 }


 //getChapterListByBranchId
chapterList:any;
getChapterListByBranchId(branchId:any)
{
//progress-bar-start
this.progressBarStart();

this._chapter.getChaptersByBranchId(branchId).subscribe(data=>{
   this.chapterList=data;
   console.log(data);
    //progress-bar-stop
    this.progressBarStop();
},error=>{
    console.log(error);
    //progress-bar-stop
    this.progressBarStop();
})
}

selectChapter(e:any)
{
  this.getQuestionSetByChapterId(e.target.value);
 }



 
 //getChapterListByBranchId
questionSetList:any;
getQuestionSetByChapterId(chapterId:any)
{
//progress-bar-start
this.progressBarStart();

this._qs.getQuestionSetByChapterId(chapterId).subscribe(data=>{
   this.questionSetList=data;
   console.log(data);
    //progress-bar-stop
    this.progressBarStop();
},error=>{
    console.log(error);
    //progress-bar-stop
    this.progressBarStop();
})
}







    //PROGRESS BAR START_STOP
    progressBarStart()
    {
      this.progressBar.dynamicValue=true;
    }
    progressBarStop()
    {
      this.progressBar.dynamicValue=false;
    }
  
}
