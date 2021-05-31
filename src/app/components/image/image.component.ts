import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/nasaepic.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  images: Image[];

  constructor(
    private nasaepicService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const date = this.activatedRoute.snapshot.paramMap.get('date')
    console.log('Date --> ', date);

    this.nasaepicService.getImageById(date).subscribe((images) => {
      if (!images) {
        return this.router.navigateByUrl('/');
      }
      this.images = images.map((image) => ({ ...image, url: this.getImageUrl(image.image,image.date) }));
      console.log('Images --> ', this.images);
    });

  }

  getImageUrl(id: string, date: string): string {
    return this.nasaepicService.getImageUrl(id, date);
  }

}
