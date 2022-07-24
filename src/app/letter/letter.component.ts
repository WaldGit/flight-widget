import { AfterViewInit, Component, ComponentRef, Input, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { SingleLetterComponent } from '../single-letter/single-letter.component';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit, AfterViewInit {

@Input() flight: any;
@Input() detail : any;

@ViewChildren('dynamic', { read: ViewContainerRef }) dynamic: QueryList<ViewContainerRef>;

private componentRef : ComponentRef<SingleLetterComponent> | undefined;

  constructor() { }
  ngAfterViewInit(): void {
    this.addComponents();
  }

  ngOnInit(): void {
    console.log("OKKKKKKK");
  }

  getDetail(detail: any) {
    this.detail = detail;
    return Array.from(detail);
  }

  addComponents(){
    console.log("init ", this.dynamic);
    this.dynamic.map((vcr: ViewContainerRef,index:number) => {
      vcr.clear();
      console.log("Number", index);

  
     setTimeout(() => {
      this.componentRef = vcr.createComponent(SingleLetterComponent);
      this.componentRef.instance.letter = this.detail [index];
     }, 150*index);

     
    })
  }

}
