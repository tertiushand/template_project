import { Component, OnInit } from '@angular/core';

var large = 1;

@Component({
  selector: 'build-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  private headers: Array<string>;
  private content: Array<Array<any>>;
  private rows: Array<number>;
  private largest: number;
  private ascDesc: Array<boolean>;

  constructor() { }

  ngOnInit() {
    this.headers = [
      "Header 1",
      "Header 2",
      "Header 3",
      "Header 4"
    ];
    this.content = [
      [0,0,3,5,2,5,5,934,43,69,965,4576,346,435,74,8576,96,678,5,234],
      [3,24,1,5,1265,6,3245,67,45,5645,47,4657,65,4567,67,43,556,546,34,67],
      [5,8,3,6,78,56,34,67,87,87,456,345,645,675,768,876,67,5634,56,3245],
      [0,0,0,0,0,0,0,4675,34,4,11,3,34,5,54,34,5,7,78,879]
    ];
    this.content.forEach(this.findLargest);
    this.largest = large;
    this.rows = Array(this.largest).fill(1).map((x,i)=>i)
    this.ascDesc = Array(this.headers.length).fill(false);
  }

  findLargest(item) {
    if (item.length > large)
      large = item.length;
  }

  setRowOrder(colNum: number) {
    this.rows = this.getRowOrder(this.content[colNum], this.ascDesc[colNum]);
    this.ascDesc[colNum] = !this.ascDesc[colNum];
  }

  getRowOrder(column: Array<any>, reverse?: boolean): Array<number> {
    let newCol = reverse?column.concat().sort(function(a, b){return a - b}):column.concat().sort(function(a, b){return b - a});
    let newOrder = [];
    for (let i=0; i<newCol.length; i++) {
      for (let j=0; j<column.length; j++) {
        if (newCol[i] === column[j]) {
          let found = false;
          for (let k=0; k<newOrder.length; k++) {
            if (newOrder[k] === j) {
              found = true;
              break;
            }
          }
          if (!found){
            newOrder.push(j);
            break;
          }
        }
      }
    }

    return newOrder;
  }

}
