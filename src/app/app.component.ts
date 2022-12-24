import { Component } from '@angular/core';
import { Data } from '@angular/router';
import{UsersService} from './services/users.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angulartask';
  users:any;
  p: number = 1;
  total: number = 0;

  constructor(private service:UsersService){}

  ngOnInit(){
    this.getUsers();
  }
  getUserData(data: any){

    this.service.adduser(data).subscribe((result:any)=>{
      console.log(result);
    })
  }
  updateuser(id :any){
    this.service.updateuser(id).subscribe((result:any)=>{
     // console.log(result);
     this.users = result.data;
    })
  }
  getUsers(){
    this.service.getUsers(this.p)
    .subscribe((response: any) => {
      this.users = response.data;
      this.total = response.total;
    });
  }
  pageChangeEvent(event: number){
    this.p = event;
    this.getUsers();
  }
  OnDeleteuser(id:number){
    console.warn(id);
    this.service.deleteData(id).subscribe(data=>{
      this.getUsers();
    })

  }
}
