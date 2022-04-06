import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/_services/chapterServices/chapter.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fetch-chapters',
  templateUrl: './fetch-chapters.component.html',
  styleUrls: ['./fetch-chapters.component.css']
})
export class FetchChaptersComponent implements OnInit {

  constructor(private _chapter:ChapterService) {
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
