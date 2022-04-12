import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';

@Component({
  selector: 'app-upload-file-sub-category',
  templateUrl: './upload-file-sub-category.component.html',
  styleUrls: ['./upload-file-sub-category.component.css']
})
export class UploadFileSubCategoryComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {subCategoryId: string},
  private _scs:SubCategoryService,
  private _snackBar: MatSnackBar,private _shs:SnackbarHelperService) {
}

  ngOnInit(): void {
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
    this._scs.sub_upload_file_service(this.file,this.data.subCategoryId).subscribe(data=>{
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
