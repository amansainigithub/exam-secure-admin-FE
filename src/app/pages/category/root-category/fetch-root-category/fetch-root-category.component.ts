import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RootCategoryService } from 'src/app/_services/categoryServices/root-category.service';
import Swal from 'sweetalert2';
import { UpdateRootCategoryComponent } from '../update-root-category/update-root-category.component';
import { UploadFileRootCategoryComponent } from '../upload-file-root-category/upload-file-root-category.component';

@Component({
  selector: 'app-fetch-root-category',
  templateUrl: './fetch-root-category.component.html',
  styleUrls: ['./fetch-root-category.component.css']
})
export class FetchRootCategoryComponent implements OnInit {

  progressBar:any ={
    dynamicValue:false
  }

  constructor(private _rcs:RootCategoryService,public dialog: MatDialog) {
  }



  ngOnInit(): void {
    this.fetchRootCategoryData();
  }

  ok(status:any)
  {
    console.log("OKKK");
    console.log(status);
    
    
  }

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


  removeRootaCategory(id:any)
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
        this._rcs.removeRootaCategoryService(id).subscribe(data=>
          {
            console.log(data);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.fetchRootCategoryData();
          },error=>{
            console.log(error);
            
          })
      }
    })
  }

  
  updateRootCategory(id:any) {
    //console.log(id);
    const dialogRef = this.dialog.open(UpdateRootCategoryComponent,{
      width: '650px',
      data: {rootCategoryId: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchRootCategoryData();
    });

  }

  uploadFileRootCategory(id:any) {
    //console.log(id);
    const dialogRef = this.dialog.open(UploadFileRootCategoryComponent,{
      width: '400px',
      data: {rootCategoryId: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchRootCategoryData();
    });

  }


  //Change-Status
  changeStatus(status:any,node:any)
  {
    //progress-bar-start
    this.progressBarStart();
    if(status == true){
      node.status=false;
      this.changeRootCategoryStatus(node);
    }
    else if(status == false){
      node.status=true;
      this.changeRootCategoryStatus(node);
    }
    //progress-bar-stop
    this.progressBarStop();
  }

  //CHANGE-STATUS
  changeRootCategoryStatus(node:any)
  {
    this._rcs.updateRootCategoryService(node).subscribe(data=>{
      this.fetchRootCategoryData();
    },error=>{
      console.log(error);
      
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
