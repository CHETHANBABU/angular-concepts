import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/commonUtil/mock.data';
import { SharedService } from 'src/app/commonUtil/util/shared.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  color: string = 'lightgreen';
  isNgIf: boolean = true;
  isLoggedIn: boolean = true;
  showCIf: boolean = true;
  showCpIf = false;
  showCpDelay = false;
  delayInSec = 0;
  inpB: any;

  heroes = HEROES;
  er: boolean;

  constructor(private sharedService: SharedService) {
    setTimeout(()=>{
      if(this.isNgIf && this.isLoggedIn){
        this.isNgIf = false;
        this.isLoggedIn = false;
      } else {
        this.isNgIf = true;
        this.isLoggedIn = true;
      }
    }, 5000);
   }

  ngOnInit() {
  }

  onKP(event): void {
    this.inpB = event;
  }

  outB(event): void {
    (event) ? this.er = event : this.er = event;
  }
}
