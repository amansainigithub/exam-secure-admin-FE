import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import { QuestionAnswerService } from 'src/app/_services/questionAnswerService/question-answer.service';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';
import { RootToEndService } from 'src/app/_services/root-to-end.service';

@Component({
  selector: 'app-root-to-end',
  templateUrl: './root-to-end.component.html',
  styleUrls: ['./root-to-end.component.css']
})
export class RootToEndComponent implements OnInit {

  constructor(private _rte:RootToEndService,
              public dialog: MatDialog,
              private _chapter:ChapterService,
              private _bcs:BottomCategoryService,
              private _shs:SnackbarHelperService,
              private _branch:BranchService,
              private _qs:QuestionSetService,
              private _rcs:RootCategoryService,
              private _scs:SubCategoryService,
              private _qas:QuestionAnswerService) {
  }

  ngOnInit(): void {
  }

  progressBar:any ={
    dynamicValue:false
  }
  searchKey:any={
    "key": "",
 }



 

  searchList:any;
  searchKeyHit(event:any)
  {
      //progress-bar-start
      this.progressBarStart();

      this._rte.getRootCategoryByIdService(event.key).subscribe(data=>{
         this.searchList=data;
         console.log(data);



          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
  }


  subCategoryListBranch:any;
  getSubBranch(rootCategoryId:any)
{   
  console.log("rootCategory :" + rootCategoryId);
  
    //progress-bar-start
      this.progressBarStart();

        this._scs.getSubCategoriesByRootCategoryId(rootCategoryId).subscribe(data=>{
        this.subCategoryListBranch=data;
        
        console.log(data);
          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
}
  bottomBranch:any;
  getBottomBranch(subCategoryId:any)
  {
    console.log("Sub Category ID : " + subCategoryId);
    
     //progress-bar-start
     this.progressBarStart();

     this._bcs.getBottomCategoriesBySubCategoryId(subCategoryId).subscribe(data=>{
        this.bottomBranch=data;
        console.log(data);
         //progress-bar-stop
         this.progressBarStop();
     },error=>{
         console.log(error);
         //progress-bar-stop
         this.progressBarStop();
     })
    
  }


  //BRANCH LIST
  branchList:any;
getBranchByBottomCategoryId(bottomCategoryId:any)
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
