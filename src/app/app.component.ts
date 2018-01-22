import { Component ,ViewChild ,Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
  	setInterval(()=>{this.send2Server()},2000);
  }
 @ViewChild('myvalue')inpuText;

  send2Server(){
  	let data=this.inpuText.nativeElement;
  	console.log(data.value);
  }
     printv(ev){
 	        console.log(ev,'it"s from child.');
    } 
}