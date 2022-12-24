import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
   url = 'https://reqres.in/api/users/';

  constructor(private httpClient:HttpClient) { }

  getUsers(page: number){
    return this.httpClient.get(this.url + '?page=' + page);
  }
  adduser(data:any){
    return this.httpClient.post(this.url,data);
  }
  updateuser(id:any){
    return this.httpClient.put(this.url + ':id'+id,id);
  }
  deleteData(id:number)
  {
    return this.httpClient.delete(this.url+id); 
  }

}
