import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'Retro Barcode Generator';
  boxes: Array<string> = []

  fillBoxes() {
    for (let i = 0; i < 10; i++) {
      const boxColor = (Math.floor(Math.random() * 10))+1;
      if (boxColor === 1) {
        this.boxes.push('OliveDrab');
      } else if (boxColor === 2) {
        this.boxes.push('PaleGreen');
      } else if (boxColor === 3) {
        this.boxes.push('SandyBrown');
      } else if (boxColor === 4) {
        this.boxes.push('SkyBlue');
      } else if (boxColor === 5) {
        this.boxes.push('Orange');
      } else if (boxColor === 6) {
        this.boxes.push('SlateBlue');
      } else if (boxColor === 7) {
        this.boxes.push('Black');
      } else if (boxColor === 8) {
        this.boxes.push('YellowGreen');
      } else if (boxColor === 9) {
        this.boxes.push('Thistle');
      } else if (boxColor === 10) {
        this.boxes.push('SpringGreen');
      }
    }
  }

  ngOnInit() {
    this.fillBoxes();
  }

}
