import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-sets-by-root',
  templateUrl: './watch-sets-by-root.component.html',
  styleUrls: ['./watch-sets-by-root.component.css']
})
export class WatchSetsByRootComponent implements OnInit {

  constructor(private _activateRouter:ActivatedRoute,) { }

  rootId:any;
  ngOnInit(): void {
    this.rootId=this._activateRouter.snapshot.params.id;
    console.log(this.rootId);
    
  }

}
