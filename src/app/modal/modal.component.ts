import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalContent: any;
  public headerText = 'Placeholder';
  public isOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.isOpen = true;
  }

  public closeModal () {
    this.isOpen = false;
  }

}
