import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, DestroyRef, inject } from '@angular/core';
import { environment } from '../environments/environments';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  standalone:true
})
export class AppComponent {
  title = 'study';
  http=inject(HttpClient)
  destroyRef=inject(DestroyRef)
url="https://momentum.redberryinternship.ge/api"
  handleClick(){

    const token=environment.myApiToken

    console.log(environment.myApiToken)
      const header=new HttpHeaders({
        Authorization: `Bearer ${token}`
    })
    let sub=this.http.get<any[]>(`${this.url}/tasks`, {headers:header}).subscribe({
      next:data=>{
        console.log(data)
      }, 
      error:(error)=>{
    console.log(error)
      }
     })
    
     this.destroyRef.onDestroy(()=>{
      sub.unsubscribe()
    })
    
     
  }
}
