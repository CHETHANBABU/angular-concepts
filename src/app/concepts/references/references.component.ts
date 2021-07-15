import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  @ViewChild('lastName') lastName: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddGift(giftName: HTMLInputElement): void {
    console.log('Local Reference Example', giftName.value);
  }

  onLastName(): void {
    console.log('Using View Child', this.lastName.nativeElement.value);
  }

}
