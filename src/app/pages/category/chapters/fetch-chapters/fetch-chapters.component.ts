import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import Swal from 'sweetalert2';
import { UploadFileChapterComponent } from '../upload-file-chapter/upload-file-chapter.component';

@Component({
  selector: 'app-fetch-chapters',
  templateUrl: './fetch-chapters.component.html',
  styleUrls: ['./fetch-chapters.component.css']
})
export class FetchChaptersComponent implements OnInit {

  constructor(private _chapter:ChapterService,public dialog: MatDialog) {
  }

  progressBar:any ={
    dynamicValue:false
  }

  ngOnInit(): void {
    this.getChaptersList();
  }


  chapterList:any;
  public getChaptersList()
  {
      //progress-bar-start
      this.progressBarStart();

      this._chapter.getAllChapters().subscribe(data=>{
         this.chapterList=data;
         console.log(data);
          //progress-bar-stop
          this.progressBarStop();
      },error=>{
          console.log(error);
          //progress-bar-stop
          this.progressBarStop();
      })
  }


  removeChapterbyId(chapterId:any)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        //calling delete service
        this._chapter.deleteChapterById(chapterId).subscribe(data=>
          {
            //console.log(data);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getChaptersList();
          },error=>{
            console.log(error);
            
          })
      }
    })
  }



  
  //Change-Status
  changeStatus(status:any,node:any)
  {
    //progress-bar-start
    this.progressBarStart();
    if(status == true){
      node.status=false;
      this.changeChapterStatus(node);
    }
    else if(status == false){
      node.status=true;
      this.changeChapterStatus(node);
    }
    //progress-bar-stop
    this.progressBarStop();
  }

  //CHANGE-STATUS
  changeChapterStatus(node:any)
  {
    this._chapter.updateChapter(node).subscribe(data=>{
      this.getChaptersList();
    },error=>{
      console.log(error);
    })
  }
 


  //UPLOAD FILE
 uploadFileChapter(id:any) {
  //console.log(id);
  const dialogRef = this.dialog.open(UploadFileChapterComponent,{
    width: '400px',
    data: {chapterId: id},
  });

  dialogRef.afterClosed().subscribe(result => {
    this.getChaptersList();
  });

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
