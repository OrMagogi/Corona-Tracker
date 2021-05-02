import { Component, NgModule, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CoronaTrackerService } from '../corona-tracker.service';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {
  @Input() isScreenXs: boolean;
  @ViewChild('loginPassword') loginPasswordRef: ElementRef;
  @ViewChild('loginUsername') loginUsernameRef: ElementRef;
  loggedUser: String;
  isLoggedIn: boolean;
  isLoginDataIncorrect: boolean;
  failedLoginMessage;
  constructor(public modalService: NgbModal, private _service: CoronaTrackerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    if (localStorage.getItem("loggedUser") != 'undefined') {
      this.loggedUser = localStorage.getItem("loggedUser");
      this.isLoggedIn = true;
      console.log("toolbar: isLoggedIn: " + this.isLoggedIn);
      console.log("toolbar: loggedUser: " + this.loggedUser);
    } else {
      this.isLoggedIn = false;
    }
    this._service.setIsLoggedIn(this.isLoggedIn);
    this.isLoginDataIncorrect = false;
  }

  closeResult = '';
  public hidePassword = true;

  handleLogInOut(loginModal) {
    if (!this.isLoggedIn) {
      this.open(loginModal);
    } else {
      this.openLogoutDialog();
    }
  }

  open(content) {
    this.hidePassword = true;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.isLoginDataIncorrect = false;
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmitLogin(userEmail: string, userPassword: string) {
    this._service.loginUser(userEmail, userPassword).subscribe((response) => {
      console.log(response.message);
      if (response.message == 'success') {   // if logged in successfuly
        localStorage.setItem("loggedUser", response.fullName);
        localStorage.setItem("loggedUserEmail", userEmail);
        this.isLoggedIn = true;
        this.loggedUser = response.fullName;
        this._service.setIsLoggedIn(true);
        this.modalService.dismissAll();
        this._service.getCoronaDataFromStorage();
      } else {                              // if failed to login
        this.failedLoginMessage = response.message;
        this.isLoginDataIncorrect = true;
      }
    });
  }

  onEnterRegistration() {
    this.modalService.dismissAll();
  }

  openLogoutDialog() {
    let dialogRef = this.dialog.open(LogoutDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == "logout") {
        console.log(result);
        localStorage["loggedUser"] = undefined;
        localStorage["loggedUserEmail"] = undefined;
        this.isLoggedIn = false;
        this._service.setIsLoggedIn(false);
      }
    })
  }


}
