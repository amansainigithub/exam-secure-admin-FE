import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  public baseUrl:string = 'http://localhost:5599/api/auth/cred/oex/secure/';

  constructor() { }
}
