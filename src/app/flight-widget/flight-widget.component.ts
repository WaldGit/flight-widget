import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { LetterComponent } from '../letter/letter.component';
import { Flight } from './flight';

@Component({
  selector: 'app-flight-widget',
  templateUrl: './flight-widget.component.html',
  styleUrls: ['./flight-widget.component.scss']
})
export class FlightWidgetComponent implements OnInit, AfterViewInit {

  flights: Flight[] = [
    {
      time: "08:11",
      destination: "OMAN",
      flight: "OX 203",
      gate: "A 01",
      remarks: "ON TIME"
    },
    {
      time: "08:11",
      destination: "LONDON",
      flight: "LD 210",
      gate: "A 01",
      remarks: "ON TIME"
    },
    {
      time: "10:11",
      destination: "FRANKFURT",
      flight: "FDR 210",
      gate: "A 01",
      remarks: "ON TIME"
    }
  ];
  @ViewChildren('dynamic', { read: ViewContainerRef }) dynamic: QueryList<ViewContainerRef>;

  private componentRef: ComponentRef<LetterComponent> | undefined;
  propertyOfObject: any;

  constructor() {


    console.log("--------------");
    console.log(this.generateRandomNumber(2));

    //shows the properties of the object
    for (let flight of this.flights) {
      //proprety of object
      for (let flightDetails in flight) {
        console.log('flightDetails ', flightDetails);
      }
    }
  }

  ngAfterViewInit(): void {
    this.addComponents();
  }

  ngOnInit(): void {

  }

  addComponents() {
    this.dynamic.map((vcr: ViewContainerRef, index: number) => {

      vcr.clear();

      let property = this.propertyOfObject[index % 5];
      let round = Math.floor(index / 5);

      setTimeout(() => {
        this.componentRef = vcr.createComponent(LetterComponent);
        this.componentRef.instance.detail = this.flights[round][property as keyof Flight];;
      }, 100 * index);


    })
  }

  getContent(input: string) {
    console.log(input);
  }

  getArray(input: string) {
    return Array.from(input);
  }

  getObj(obj: any) {
    this.propertyOfObject = Object.entries(obj).map(([key, value]) => {
      return key;
    });


    return this.propertyOfObject;
  }

  addFlight() {
    this.flights.shift();
    console.log("------- Add flight");
    this.flights.push({
      time: "11:00",
      destination: "DUBAI",
      gate: "1",
      flight: "DB01",
      remarks: "ON TIME"
    });

    console.log(this.flights.length * 5);
    setTimeout(() => {
      this.addComponents();

    }, 100);

  }

 generateRandomNumber(maxNumber: number){

    let numbers = "0123456789";
    if(maxNumber) {
      numbers= numbers.slice(maxNumber);
    }

    return Math.floor(Math.random() * numbers.length);
 }

}
