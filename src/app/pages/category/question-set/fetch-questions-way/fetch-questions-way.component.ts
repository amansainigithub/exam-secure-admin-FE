import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import { QuestionAnswerService } from 'src/app/_services/questionAnswerService/question-answer.service';
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
    private _qs:QuestionSetService,
    private _rcs:RootCategoryService,
    private _scs:SubCategoryService,
    private _qas:QuestionAnswerService) { }


    progressBar:any ={
      dynamicValue:false
    }
  

  ngOnInit(): void {
    //Root
    this.fetchRootCategoryData();
  }


  //ROOT CATEGORY LIST
  fetchRootCategory:any;
  public fetchRootCategoryData()
  {
      //progress-bar-start
      this.progressBarStart();

      this._rcs.fetchRootCategoryService().subscribe(data=>{
         this.fetchRootCategory=data;
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
  selectRootCategory(e:any)
  {
   e.target.value;
   this.getSubCategoriesByRootCategoryId(e.target.value);
  }

  subCategoryList:any;
  getSubCategoriesByRootCategoryId(rootCategoryId:any)
{
    //progress-bar-start
      this.progressBarStart();

        this._scs.getSubCategoriesByRootCategoryId(rootCategoryId).subscribe(data=>{
        this.subCategoryList=data;
        
        console.log(data);
          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
}


selectSubCategory(e:any)
{
  this.getBottomCategoriesBySubCategoryId(e.target.value);
}



  bottomCategoryList:any;
  public getBottomCategoriesBySubCategoryId(subCategoryId:any)
  {
      //progress-bar-start
      this.progressBarStart();

      this._bcs.getBottomCategoriesBySubCategoryId(subCategoryId).subscribe(data=>{
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


//selectQuestionSet
selectQuestionSet(e:any)
{
  this.getQuestionsAnswersByQuestionSetId(e.target.value)
}

 //getChapterListByBranchId
 questionAnswerList:any;
 getQuestionsAnswersByQuestionSetId(questionSetId:any)
 {
 //progress-bar-start
 this.progressBarStart();
 
 this._qas.getQuestionAnswerByQuestionSetId(questionSetId).subscribe(data=>{
    this.questionAnswerList=data;
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
