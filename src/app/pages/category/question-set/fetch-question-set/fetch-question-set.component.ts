import { Component, OnInit } from '@angular/core';
import { QuestionSetService } from 'src/app/_services/questionSetServices/question-set.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fetch-question-set',
  templateUrl: './fetch-question-set.component.html',
  styleUrls: ['./fetch-question-set.component.css']
})
export class FetchQuestionSetComponent implements OnInit {

  constructor(private _qss:QuestionSetService) {
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
