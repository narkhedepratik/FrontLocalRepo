import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Databinding';
  userName:string="pratik@123";
  flag:boolean=true;

  hello()
  {
         alert("Hello Programer..!")
  }
  changeText()
  {
   this.userName="Nkhil@1234"
  }
  defaultText()
  {
    this.userName="Pratik@123"
  }

}
