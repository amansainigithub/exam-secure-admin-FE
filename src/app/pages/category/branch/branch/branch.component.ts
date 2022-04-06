import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor(private _bcs:BottomCategoryService,
    private _shs:SnackbarHelperService,
    private _branch:BranchService) { }

  ngOnInit(): void {
    this.fetchBottomCategoryData();
  }

  progressBar:any ={
    dynamicValue:false
  }



  branchForm:any={
    "branchName": "",
    "defaultName": "",
    "fileName": "",
    "fileUrl": "",
    "shortDescription": "",
    "longDescription": "",
    "status": true,
    "storingDateTime": "",
    "sequenceNum": "",
    "bottomCategoryCloneId":"",
    "bottomCategoryModel":{
      "id":""
    },
}


bottomCategoryList:any;
  public fetchBottomCategoryData()
  {
      //progress-bar-start
      this.progressBarStart();

      this._bcs.fetchBottomCategoryService().subscribe(data=>{
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


  bottomCategoryId:any;
selectBottomCategory(e:any)
{
  this.bottomCategoryId =  e.target.value;
}

createBranch()
{
  this.branchForm.bottomCategoryModel.id = this.bottomCategoryId;
    this.branchForm.bottomCategoryCloneId = this.bottomCategoryId;

    console.log(this.branchForm);
    
          //progress-bar-start
          this.progressBarStart();

          this._branch.savebranch(this.branchForm).subscribe(data=>{
            //console.log(data);

            //snack bar running..
            this._shs.OpenSnackbar_horizontalPosition_start("Branch Created","close",2000);

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
