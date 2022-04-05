import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';

@Component({
  selector: 'app-root-category',
  templateUrl: './root-category.component.html',
  styleUrls: ['./root-category.component.css']
})
export class RootCategoryComponent implements OnInit {

 
  constructor(private _rcs:RootCategoryService,
            private _shs:SnackbarHelperService) { }

  progressBar:any ={
    dynamicValue:false
  }


  rootCategoryForm:any={
      "rootCategoryName": "",
      "defaultName": "",
      "fileName": "",
      "fileUrl": "",
      "shortDescription": "",
      "longDescription": "",
      "status": true,
      "storingDateTime": "",
      "sequenceNum": ""
  }


  ngOnInit(): void {
  }

  createRootCategory()
  {
     //progress-bar-start
     this.progressBarStart();

    this._rcs.createRootCategoryService(this.rootCategoryForm).subscribe(data=>{
      //console.log(data);

      //snack bar running..
      this._shs.OpenSnackbar_horizontalPosition_start("Root Category Created","close",2000);

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
