import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-updated-list-table',
  templateUrl: './updated-list-table.component.html',
  styleUrls: ['./updated-list-table.component.scss']
})
export class UpdatedListTableComponent implements OnInit {

  @Input() List;
  @Input() statsUpdated;
  constructor() { }

  ngOnInit() {
  }

}
