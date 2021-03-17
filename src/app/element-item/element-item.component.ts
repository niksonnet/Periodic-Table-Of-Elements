import { Component, Input, OnInit } from '@angular/core';
import { Element } from '../models/Element.model';

@Component({
  selector: 'app-element-item',
  templateUrl: './element-item.component.html',
  styleUrls: ['./element-item.component.css'],
})
export class ElementItemComponent implements OnInit {
  @Input() element: Element;
  constructor() {}

  ngOnInit(): void {}
}
