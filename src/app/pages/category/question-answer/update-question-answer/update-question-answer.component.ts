import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import { QuestionAnswerService } from 'src/app/_services/questionAnswerService/question-answer.service';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';

@Component({
  selector: 'app-update-question-answer',
  templateUrl: './update-question-answer.component.html',
  styleUrls: ['./update-question-answer.component.css']
})
export class UpdateQuestionAnswerComponent implements OnInit {

    constructor(private _activateRouter:ActivatedRoute,private _chapter:ChapterService,
      private _bcs:BottomCategoryService,
      private _shs:SnackbarHelperService,
      private _branch:BranchService,
      private _qs:QuestionSetService,
      private _rcs:RootCategoryService,
      private _scs:SubCategoryService,
      private _qas:QuestionAnswerService) { }

  questionAnswerid:any;  
  ngOnInit(): void {

    this.questionAnswerid=this._activateRouter.snapshot.params.id;

     //Root
     this.getAllQuestionSet();

     //getQuestionAnswerbyid;
     this.getQuestionAnswerById();
  }
  progressBar:any ={
    dynamicValue:false
  }


  
  //getChapterListByBranchId
 questionSetList:any;
 getAllQuestionSet()
 {
 //progress-bar-start
 this.progressBarStart();
 
 this._qs.getAllQuestionSet().subscribe(data=>{
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
 









  //getQuestionAnswerById
  questionAnswerForm:any;
  public getQuestionAnswerById()
  {
      //progress-bar-start
      this.progressBarStart();
  
      this._qas.getQuestionAnswerById(this.questionAnswerid).subscribe(data=>{
         this.questionAnswerForm=data;
        // console.log(data);
          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
  }


  selectQuestionSetid:any;
  selectQuestionAnswerSet(e:any)
  {
    this.selectQuestionSetid = e.target.value;
  }

  updateQuestionAnswer()
  {
  
    this.questionAnswerForm.questionSetsModel.id = this.selectQuestionSetid;
  
      console.log(this.questionAnswerForm);
      
            //progress-bar-start
            this.progressBarStart();
  
            this._qas.saveQuestionAnsersService(this.questionAnswerForm).subscribe(data=>{
              //console.log(data);
  
              //snack bar running..
              this._shs.OpenSnackbar_horizontalPosition_start("Question Update","close",2000);
  
                //progress-bar-stop
                this.progressBarStop();
  
            },
            error=>{
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
