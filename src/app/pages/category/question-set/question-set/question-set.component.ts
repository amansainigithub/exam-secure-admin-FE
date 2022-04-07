import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';

@Component({
  selector: 'app-question-set',
  templateUrl: './question-set.component.html',
  styleUrls: ['./question-set.component.css']
})
export class QuestionSetComponent implements OnInit {

  constructor(private _chapter:ChapterService,
    private _bcs:BottomCategoryService,
    private _shs:SnackbarHelperService,
    private _branch:BranchService,
    private _qs:QuestionSetService) { }

  ngOnInit(): void {

    //getAllBranch
    this.getAllBranchList();
  }

  
  progressBar:any ={
    dynamicValue:false
  }

  questionSetForm:any={
    "questionSetName": "",
    "defaultName": "",
    "fileName": "",
    "fileUrl": "",
    "shortDescription": "",
    "longDescription": "",
    "status": true,
    "storingDateTime": "",
    "sequenceNum": "",
    "questionSetCloneId":"",
    "passPercentage":"",
    "questionSetDuration":"",
    "experience":"",
    "paragraph":"",
    "title":"",
    "chaptersModel":{
      "id":""
    },
}


//getBranchList
branchList:any;
getAllBranchList()
{
//progress-bar-start
this.progressBarStart();

this._branch.getAllBranchService().subscribe(data=>{
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


selectBranchId(e:any)
{
  console.log(e.target.value);
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

selectedChapterId:any;
selectChapterId(e:any)
{
console.log(e.target.value);
this.selectedChapterId = e.target.value;

}


createQuestionSet()
{
  console.log(this.selectedChapterId);
  
  this.questionSetForm.chaptersModel.id = this.selectedChapterId;
  this.questionSetForm.questionSetCloneId = this.selectedChapterId;

    console.log(this.questionSetForm);
    
          //progress-bar-start
          this.progressBarStart();

          this._qs.saveQuestionSet(this.questionSetForm).subscribe(data=>{
            //console.log(data);

            //snack bar running..
            this._shs.OpenSnackbar_horizontalPosition_start("Question Set Created","close",2000);

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
