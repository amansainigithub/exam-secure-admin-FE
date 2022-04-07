import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.css']
})
export class UpdateBranchComponent implements OnInit {

  constructor(private _bcs:BottomCategoryService,private _activateRouter:ActivatedRoute,
    private _shs:SnackbarHelperService,
    private _branch:BranchService) { }

    branchId:any;
  ngOnInit(): void {
    this.branchId=this._activateRouter.snapshot.params.id;
    //console.log("***********");
   // console.log(this.branchId);
    
    //Fetch Bottom Category
    this.fetchBottomCategoryData();

    this.getBranchById();
  }

  
  progressBar:any ={
    dynamicValue:false
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


branchForm:any;
public getBranchById()
{
    //progress-bar-start
    this.progressBarStart();

    this._branch.getBranchByIdService(this.branchId).subscribe(data=>{
       this.branchForm=data;
      // console.log(data);
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

updateBranch()
{
//progress-bar-start
this.progressBarStart();

//Set F-K
this.branchForm.bottomCategoryModel.id = this.bottomCategoryId;

 this._branch.updatebranchService(this.branchForm).subscribe(data=>{
  
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
