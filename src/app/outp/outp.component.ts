import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-outp',
  templateUrl: './outp.component.html',
  styleUrls: ['./outp.component.css']
})
export class OutpComponent implements OnInit {
    @Input ('total') htValue;
    @Output('outval') otVal=new EventEmitter();
  constructor() { }

  ngOnInit() {
  	console.log(this.htValue, 'It is');
  	this.otVal.emit("Hey Um from Child");
  }

}
