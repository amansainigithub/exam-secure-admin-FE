import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import { FileResourceService } from 'src/app/_services/file-resource.service';
import { QuestionAnswerService } from 'src/app/_services/questionAnswerService/question-answer.service';
import { QuestionFilesService } from 'src/app/_services/questionFilesService/question-files.service';

@Component({
  selector: 'app-save-file-resource',
  templateUrl: './save-file-resource.component.html',
  styleUrls: ['./save-file-resource.component.css']
})
export class SaveFileResourceComponent implements OnInit {

  constructor(
    private _activateRouter:ActivatedRoute,
    private _chapter:ChapterService,
    public dialog: MatDialog,
    private _shs:SnackbarHelperService,
    private _frs:FileResourceService,
    private _qfs:QuestionFilesService) { }

  ngOnInit(): void {
    this.getAllFileResource();
  }


  progressBar:any ={
    dynamicValue:false
  }


  resourceFile:any=FileList;
  selectFile(event:any)
  {
      this.resourceFile=event.target.files;
      console.log(this.resourceFile);
  }

  uploadFile()
  {
    //Progress bar start
    this.progressBarStart()

    if(this.resourceFile.length == 0)
    { 
        //SNACK BAR MESSAGE
        this._shs.OpenSnackbar_horizontalPosition_start("Please Select File","close",2000);
      //PB STOP
        this.progressBarStop();
        return;
    }

   // UPLOAD FILE
   for (let i = 0; i < this.resourceFile.length; i++) {
        this._frs.saveFileResource(this.resourceFile[i]).subscribe(data=>{
          console.log( data);
          
          if(this.resourceFile.length-1 === i)
          {
            //PB STOP
             this.progressBarStop();
          }
           this.getAllFileResource();

        },error=>{
          console.log(error);
          //PB STOP
        this.progressBarStop();
        })
   }
  }


  fileResourceList:any;
  getAllFileResource()
  {
    this._frs.getAllFileResource().subscribe(data=>{
      console.log(data);
      this.fileResourceList = data;
    },error=>{
      console.log(error);
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
