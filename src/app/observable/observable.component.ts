import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  ngOnInit(): void {

    // const secondsCounter = interval(1000);
    // const subscription1 = secondsCounter.subscribe(n =>
    //   console.log(`It's been ${n + 1} seconds since subscribing!`));


     let el = document.getElementById('my-element')!;

 
      // const mouseMoves = fromEvent<MouseEvent>(el, 'mousemove');

      // const subscription = mouseMoves.subscribe(evt => {

      //   console.log("mouse event");
 
      // });


const source = fromEvent(el, 'click');

const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));

const subscribe = example.subscribe(val => console.log(val));

}

}


;

