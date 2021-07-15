import { Component, OnInit } from '@angular/core';
import { CSVTOJSON } from '../../commonUtil/csvtojson';
@Component({
  selector: 'app-saconcept',
  templateUrl: './saconcept.component.html',
  styleUrls: ['./saconcept.component.css']
})
export class SaconceptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  forMap(){
    let idofJson = CSVTOJSON.map(el => el);
    console.log("Map example", idofJson);

    let replaceEl = CSVTOJSON.map(el=>{
      return el.Technology === 'Angular JS' ? 'Angular2+' : el.Technology;
    })
    console.log("Map using Replace example", replaceEl);
  }

  forJoin(){
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let energy = fruits.join(" and ");
    console.log("Join Example", energy);
  }

  joinAndMap(){
    let joinMap = CSVTOJSON.map(el=>{
      return [el.actuals, el.estimate].join(",");
    })
    console.log("Map and Join Example", joinMap);

    let joinSplit = joinMap.map(el=>{
      return {'actual':el.split(",")[0], "estimate": el.split(",")[1]};
    })
    console.log("Map and Split Example", joinSplit);
  }

  forFilter(){
    let filterEl = CSVTOJSON.filter(el=>{
      return el.Technology === 'Java';
    })
    console.log("Filter by condition", filterEl);
    let fIncludes = CSVTOJSON.filter(el=>{
      return el.Technology.includes('Java');
    })
    console.log("inc", fIncludes);
  }

  forFilterC(){
    let ex = [{"clientid":1,"clientname":"COKE"},{"clientid":2,"clientname":"BACARDI"},{"clientid":3,"clientname":"BIMBO"},{"clientid":4,"clientname":"mexico"}];
    let ex1 = ex.filter(el=> el.clientname == "COKE");
    console.log('ex', ex1);
  }

  forFind(){
    let findEl = CSVTOJSON.find(el=>{
      return el.Month === 'Nov';
    })
    console.log("Find by condition", findEl);
  }

  forReduce(){
    let reduceEl = CSVTOJSON.reduce((a,b)=> a.Month === 'Nov' ? a : b )
    console.log("Reduce Example", reduceEl);
  }
  

}
