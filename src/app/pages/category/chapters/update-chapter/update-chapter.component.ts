import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnackbarHelperService } from 'src/app/_helpers/snackbar-helper/snackbar-helper.service';
import { BranchService } from 'src/app/_services/branchServices/branch.service';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';

@Component({
  selector: 'app-update-chapter',
  templateUrl: './update-chapter.component.html',
  styleUrls: ['./update-chapter.component.css']
})
export class UpdateChapterComponent implements OnInit {

  constructor(private _activateRouter:ActivatedRoute,
    private _chapter:ChapterService,
    private _shs:SnackbarHelperService,
    private _branch:BranchService) { }

    progressBar:any ={
      dynamicValue:false
    }
  

  chapterId:any;
  ngOnInit(): void {
    this.chapterId=this._activateRouter.snapshot.params.id;

    //getBranchList
    this.getBranchList();

    // Chapter By Id
    this.getChapterById();
  }


  branchList:any;
  public getBranchList()
  {
      //progress-bar-start
      this.progressBarStart();

      this._branch.getAllBranchService().subscribe(data=>{
         this.branchList=data;
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



chapterForm:any;
public getChapterById()
{
    //progress-bar-start
    this.progressBarStart();

    this._chapter.getChapterById(this.chapterId).subscribe(data=>{
       this.chapterForm=data;
      // console.log(data);
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


updateChapter()
{
//progress-bar-start
this.progressBarStart();

//Set F-K
this.chapterForm.branchModel.id = this.selectingChapterId;

 this._chapter.updateChapter(this.chapterForm).subscribe(data=>{
  
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
