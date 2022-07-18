import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() classNames : string = '';
  // ToDo TypeScript any [] - can I make this more specific?
  @Input() data : any[] = [] ;
  @Input() headers : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
