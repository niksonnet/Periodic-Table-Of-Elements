import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Element } from '../models/Element.model';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css'],
})
export class ElementListComponent implements OnInit {
  elements: Element[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('assets/data.json').subscribe((data) => {
      console.log(data);

      this.elements = data['Table']['Row'].map((elem) => {
        return new Element(
          elem.Cell[0],
          elem.Cell[1],
          elem.Cell[2],
          elem.Cell[3],
          elem.Cell[4],
          elem.Cell[5],
          elem.Cell[6],
          elem.Cell[7],
          elem.Cell[8],
          elem.Cell[9],
          elem.Cell[10],
          elem.Cell[11],
          elem.Cell[12],
          elem.Cell[13],
          elem.Cell[14],
          elem.Cell[15],
          elem.Cell[16]
        );
      });
      console.log(this.elements);
    });
  }
}
