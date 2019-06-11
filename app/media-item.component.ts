import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem; //recommended not to use aliases
  @Output() delete = new EventEmitter(); //recommended not to use aliases
  /*name = "The Redemption";

  wasWatched() {
    return true;
  }*/

  onDelete() {
    this.delete.emit(this.mediaItem);
    //console.log("TODO: Implement - Delete has been clicked.");
  }
 }
