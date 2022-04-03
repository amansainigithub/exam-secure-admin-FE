import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorageService,private _router:Router)
  {}
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
     console.log("GUARD RUNNING");
     
      if(localStorage.getItem(TOKEN_KEY) == null || localStorage.getItem(TOKEN_KEY) == undefined)
      {
        this._router.navigateByUrl("/login");
        return false;
      }
      else{ 
        return true;
      }
  }
  
  
}
