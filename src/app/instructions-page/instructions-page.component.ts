import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions-page',
  templateUrl: './instructions-page.component.html',
  styleUrls: ['./instructions-page.component.css']
})
export class InstructionsPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  welcomePage() {
    this.router.navigate(['/']);
  }

  registerPage() {
    this.router.navigate(['/register']);
  }

}
