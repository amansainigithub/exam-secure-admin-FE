import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';

@Component({
  selector: 'app-update-question-set',
  templateUrl: './update-question-set.component.html',
  styleUrls: ['./update-question-set.component.css']
})
export class UpdateQuestionSetComponent implements OnInit {

  constructor(private _activateRouter:ActivatedRoute,
    private _chapter:ChapterService,
    private _shs:SnackbarHelperService,
    private _branch:BranchService,
    private _qss:QuestionSetService) { }

    progressBar:any ={
      dynamicValue:false
    }

    questionSetId:any;
  ngOnInit(): void {
    this.questionSetId=this._activateRouter.snapshot.params.id;

    this.getQuestionSetById();


    this.getChapterList();
  }





questionSetForm:any;
public getQuestionSetById()
{
    //progress-bar-start
    this.progressBarStart();

    this._qss.getQuestionSetById(this.questionSetId).subscribe(data=>{
       this.questionSetForm=data;
      // console.log(data);
        //progress-bar-stop
        this.progressBarStop();
    },error=>{
        console.log(error);
        //progress-bar-stop
        this.progressBarStop();
    })
}


  chapterList:any;
  public getChapterList()
  {
      //progress-bar-start
      this.progressBarStart();

      this._chapter.getAllChapters().subscribe(data=>{
         this.chapterList=data;
         console.log("*******************************************");
         
         console.log(data);
          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
  }



selectingChapterId:any;
selectChapterId(e:any)
{
  this.selectingChapterId =  e.target.value;
}



  updateQuestionSet()
  {
          //progress-bar-start
          this.progressBarStart();

          //Set F-K
          this.questionSetForm.chaptersModel.id = this.selectingChapterId;

          this._qss.updateQuestionSet(this.questionSetForm).subscribe(data=>{
            
            //snack bar running..
            this._shs.OpenSnackbar_horizontalPosition_start("Update Success","close",2000);
              //console.log(data);
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
