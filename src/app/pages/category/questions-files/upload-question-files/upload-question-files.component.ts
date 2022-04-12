import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import { QuestionAnswerService } from 'src/app/_services/questionAnswerService/question-answer.service';
import { QuestionFilesService } from 'src/app/_services/questionFilesService/question-files.service';

@Component({
  selector: 'app-upload-question-files',
  templateUrl: './upload-question-files.component.html',
  styleUrls: ['./upload-question-files.component.css']
})
export class UploadQuestionFilesComponent implements OnInit {

  constructor(private _activateRouter:ActivatedRoute,private _chapter:ChapterService,
    private _shs:SnackbarHelperService,
    private _qas:QuestionAnswerService,
    private _qfs:QuestionFilesService) { }

 questionAnswerid:any;  
  ngOnInit(): void {
    this.questionAnswerid=this._activateRouter.snapshot.params.id;
    
    //Get Question Files
    this.getQuestionsFilesByQuestionAnswerId();
  }

  progressBar:any ={
    dynamicValue:false
  }


  files:any=FileList;
  selectFile(event:any)
  {
      this.files=event.target.files;
      console.log(this.files);
  }

  uploadFile()
  {
    //Progress bar start
    this.progressBarStart()

    if(this.files.length == 0)
    { 
        //SNACK BAR MESSAGE
        this._shs.OpenSnackbar_horizontalPosition_start("Please Select File","close",2000);
      //PB STOP
        this.progressBarStop();
        return;
    }

   // UPLOAD FILE
   for (let i = 0; i < this.files.length; i++) {
        this._qfs.question_files_upload(this.files[i],this.questionAnswerid).subscribe(data=>{
          console.log(data);
          
          if(this.files.length-1 === i)
          {
            //PB STOP
             this.progressBarStop();
          }
          this.getQuestionsFilesByQuestionAnswerId();

        },error=>{
          console.log(error);
          //PB STOP
        this.progressBarStop();
        })
   }
  }

  questionFilesList:any;
  getQuestionsFilesByQuestionAnswerId()
  {
    this._qfs.getQuestionsFilesByQuestionAnswerId(this.questionAnswerid).subscribe(data=>{
      console.log(data);
      this.questionFilesList = data;
    },error=>{
      console.log(error);
    })
  }


  deleteQuestionFileById(id:any)
  {
    //Progress bar start
    this.progressBarStart()

    this._qfs.deleteQuestionFileById(id).subscribe(data=>{
      console.log(data);
      this.getQuestionsFilesByQuestionAnswerId();

        //PB STOP
        this.progressBarStop();
    },error=>{
      console.log(error);

        //PB STOP
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
