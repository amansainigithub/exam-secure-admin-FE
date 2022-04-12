import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';
import Swal from 'sweetalert2';
import { UploadFileQuestionSetComponent } from '../upload-file-question-set/upload-file-question-set.component';

@Component({
  selector: 'app-fetch-question-set',
  templateUrl: './fetch-question-set.component.html',
  styleUrls: ['./fetch-question-set.component.css']
})
export class FetchQuestionSetComponent implements OnInit {

  constructor(private _qss:QuestionSetService,public dialog: MatDialog) {
  }

  progressBar:any ={
    dynamicValue:false
  }

  ngOnInit(): void {
    this.getAllQuestionSet();
  }

  questionSetList:any;
  getAllQuestionSet()
  {
        //progress-bar-start
        this.progressBarStart();

        this._qss.getAllQuestionSet().subscribe(data=>{
            this.questionSetList=data;
            console.log(data);
            //progress-bar-stop
            this.progressBarStop();
        },error=>{
            console.log(error);
            //progress-bar-stop
            this.progressBarStop();
        })
  }



  removeQuestionSetById(questionSetId:any)
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
        this._qss.removeQuestionSetByIdService(questionSetId).subscribe(data=>
          {
            //console.log(data);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getAllQuestionSet();
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
      this.changeQuestionSetStatus(node);
    }
    else if(status == false){
      node.status=true;
      this.changeQuestionSetStatus(node);
    }
    //progress-bar-stop
    this.progressBarStop();
  }

  //CHANGE-STATUS
  changeQuestionSetStatus(node:any)
  {
    this._qss.updateQuestionSet(node).subscribe(data=>{
      this.getAllQuestionSet();
    },error=>{
      console.log(error);
    })
  }



  //UPLOAD FILE
 uploadFileQuestionSet(id:any) {
  //console.log(id);
  const dialogRef = this.dialog.open(UploadFileQuestionSetComponent,{
    width: '400px',
    data: {questionSetId: id},
  });

  dialogRef.afterClosed().subscribe(result => {
    this.getAllQuestionSet();
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
