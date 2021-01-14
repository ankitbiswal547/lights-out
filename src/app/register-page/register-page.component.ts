import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LightsOutService } from '../services/lights-out.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  @ViewChild("f", {static: true}) form: NgForm;
  warningState: boolean = false;
  constructor(private lightsOutService: LightsOutService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  isDisabled() {
    if(this.form.valid) {
      this.warningState = false;
      return false;
    }
    else{
      this.warningState = true;
      return true;
    }
  }

  onSubmit() {
    this.lightsOutService.currentUser = {
      userName: this.form.value.userName,
      branch: this.form.value.branch
    }
    this.authService.login();
    this.router.navigate(['/home']);
  }
}
