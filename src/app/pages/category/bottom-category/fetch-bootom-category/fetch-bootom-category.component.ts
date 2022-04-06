import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BottomCategoryService } from 'src/app/_services/categoryServices/bottom-category.service';
import Swal from 'sweetalert2';
import { UpdateBootomCategoryComponent } from '../update-bootom-category/update-bootom-category.component';


@Component({
  selector: 'app-fetch-bootom-category',
  templateUrl: './fetch-bootom-category.component.html',
  styleUrls: ['./fetch-bootom-category.component.css']
})
export class FetchBootomCategoryComponent implements OnInit {

  progressBar:any ={
    dynamicValue:false
  }


  constructor(private _bcs:BottomCategoryService,public dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.fetchBottomCategoryData();
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


  // updateBottomCategory(id:any)
  // {
  //  //console.log(id);
  //  const dialogRef = this.dialog.open(UpdateBootomCategoryComponent,{
  //   width: '650px',
  //   data: {bottomCaegoryId: id},
  // });

  // dialogRef.afterClosed().subscribe(result => {
  //   this.fetchBottomCategoryData();
  // });
    
  // }

  removeBottomCategory(bottomCaegoryId:any)
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
        this._bcs.deleteBottomCategoryByIdService(bottomCaegoryId).subscribe(data=>
          {
            //console.log(data);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.fetchBottomCategoryData();
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
