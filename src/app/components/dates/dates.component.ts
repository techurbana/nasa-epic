import { Component, OnInit } from '@angular/core';
import { Date } from 'src/app/models/date.interface';
import { ImagesService } from 'src/app/services/nasaepic.service';

@Component({
  selector: 'app-images',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  dates: Date[] = [];

  constructor(private nasaepicService: ImagesService) { }

  ngOnInit(): void {
    this.nasaepicService
      .getDates()
      .subscribe((dates) => this.dates = dates);
  }

}
