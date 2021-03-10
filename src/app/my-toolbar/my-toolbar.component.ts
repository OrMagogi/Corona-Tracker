import { Component,NgModule , ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {
  @Input() isScreenXs:boolean;
  @ViewChild('loginPassword') loginPasswordRef:ElementRef;
  constructor(public modalService: NgbModal) {}

  ngOnInit(): void {
  }

  closeResult = '';
  public hidePassword=true;

  open(content) {
    this.hidePassword=true;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  togglePasswordVisibility(){
    this.hidePassword= !this.hidePassword;
  }

  onSubmitLogin(username,password){
    console.log("Login: "+username + " "+password );
    
  }
}
