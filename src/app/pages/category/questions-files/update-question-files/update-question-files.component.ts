import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { QuestionFilesService } from 'src/app/_services/questionFilesService/question-files.service';

@Component({
  selector: 'app-update-question-files',
  templateUrl: './update-question-files.component.html',
  styleUrls: ['./update-question-files.component.css']
})
export class UpdateQuestionFilesComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: {questionFileId: string},
  private _qfs:QuestionFilesService,
  private _snackBar: MatSnackBar,private _shs:SnackbarHelperService ) {

    console.log("***************");
    
    console.log(this.data.questionFileId);
    
}
 progressBar:any ={
    dynamicValue:false
  }


  file:any;
  selectFile(event:any)
  {
      this.file=event.target.files[0];
      console.log(this.file);
      
  }

  uploadFile()
  {
    //Progress bar start
    this.progressBarStart()

    if(this.file.length == 0)
    { 
        //SNACK BAR MESSAGE
        this._shs.OpenSnackbar_horizontalPosition_start("Please Select File","close",2000);
      //PB STOP
      this.progressBarStop();
      return;
    }

    //UPLOAD FILE
    this._qfs.update_question_file_upload_service(this.file,this.data.questionFileId).subscribe(data=>{
          console.log(data);

           //SNACK BAR MESSAGE
        this._shs.OpenSnackbar_horizontalPosition_start("File Upload Success","close",2000);
          //PB STOP
        this.progressBarStop();
        },error=>{
          console.log(error);
          //SNACK BAR MESSAGE
        this._shs.OpenSnackbar_horizontalPosition_start("File Upload Failed","close",2000);

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
