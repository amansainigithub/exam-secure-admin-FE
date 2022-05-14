import { Component, OnInit } from '@angular/core';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import { QuestionAnswerService } from 'src/app/_services/questionAnswerService/question-answer.service';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';


declare var Tesseract:any;
@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {

  public Editor = ClassicEditorBuild;

  constructor(private _chapter:ChapterService,
    private _bcs:BottomCategoryService,
    private _shs:SnackbarHelperService,
    private _branch:BranchService,
    private _qs:QuestionSetService,
    private _rcs:RootCategoryService,
    private _scs:SubCategoryService,
    private _qns:QuestionAnswerService) { }

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
  
  
  
  
  
  
    questionAnswerForm:any={
    "question": "",
    "defaultName": "",
    "title":"",
    "ansKey":"",
    "option1":"",
    "option2":"",
    "option3":"",
    "option4":"",
    "questionSetDuration":"",
    "sequenceNum": "",
    "questionSetCloneId":"",
    "description": "",
    "solution":"",
    "ansKeyName":"",
    "questionSetsModel":{
      "id":""
    },
}
      
selectedQuestionSetId:any;
selectQuestionSet(e:any)
{
  this.selectedQuestionSetId = e.target.value;
}

selectAnswerNameKeyValue:any;
selectAnswerNameKey(e:any)
{
  this.selectAnswerNameKeyValue = e.target.value;
}

  createQuestionAnswer()
  {
    
    if(this.selectAnswerNameKeyValue == null || this.selectAnswerNameKeyValue == '')
    {
       //snack bar running..
       this._shs.OpenSnackbar_horizontalPosition_start("Please Select Answer Key","close",2000);
       return;
    }

    //putting Answer Kry
    this.questionAnswerForm.ansNameKey = this.selectAnswerNameKeyValue;
  
    //Selecting Question-set
    this.questionAnswerForm.questionSetsModel.id = this.selectedQuestionSetId;
    this.questionAnswerForm.questionSetCloneId = this.selectedQuestionSetId;
  
      console.log(this.questionAnswerForm);
      
            //progress-bar-start
            this.progressBarStart();
  
            this._qns.saveQuestionAnsersService(this.questionAnswerForm).subscribe(data=>{
              //console.log(data);
  
              //snack bar running..
              this._shs.OpenSnackbar_horizontalPosition_start("Question Answer Created","close",2000);
  
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
