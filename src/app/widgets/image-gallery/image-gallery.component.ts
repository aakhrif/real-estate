import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  @Input() images: string[] = [];
  @Input() objectId: number = 0;
  @Input() slider: boolean = true;
  currentImageIndex: number = 0;
  imagesPath: string = "";


  constructor() { }

  ngOnInit() {
    this.imagesPath = "assets/properties/object" + this.objectId + "/";
  }

  get currentImage(): string {
    return this.images[this.currentImageIndex];
  }

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
