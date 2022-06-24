import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import { SubCategoryService } from 'src/app/_services/categoryServices/sub-category.service';
import { QuestionAnswerService } from 'src/app/_services/questionAnswerService/question-answer.service';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor(private _bcs:BottomCategoryService,
    private _shs:SnackbarHelperService,
    private _branch:BranchService, 
    private _qs:QuestionSetService,
    private _rcs:RootCategoryService,
    private _scs:SubCategoryService,
    private _qns:QuestionAnswerService) { }

  ngOnInit(): void {
     //Root
     this.fetchRootCategoryData();
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
     "bgColor":"" ,
    "bottomCategoryModel":{
      "id":""
    },
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
  


// bottomCategoryList:any;
//   public fetchBottomCategoryData()
//   {
//       //progress-bar-start
//       this.progressBarStart();

//       this._bcs.fetchBottomCategoryService().subscribe(data=>{
//          this.bottomCategoryList=data;
//          console.log(data);
//           //progress-bar-stop
//           this.progressBarStop();
//       },error=>{
//           console.log(error);
//           //progress-bar-stop
//           this.progressBarStop();
//       })
//   }


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
