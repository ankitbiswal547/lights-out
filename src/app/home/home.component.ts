import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LightsOutService } from '../services/lights-out.service';
import { userSchema } from '../services/lights-out.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  matchSituation = "running";
  myMoves: number = 0;
  isWin: boolean = true;
  userDetails: userSchema;
  // seconds1: number = 10;
  // showSeconds1: boolean = true;
  // seconds2: number = 10;
  // showSeconds2: boolean = false;
  arr;

  replicaArr: any = [];

  constructor(private dialog: MatDialog, 
    private lightsOutService:LightsOutService,
    private router: Router,
    private http: HttpClient) {}

  ngOnInit() {
    this.arr = this.lightsOutService.patternArray[Math.floor((Math.random()*50))];
    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 5; j++) {
        this.replicaArr.push({value: this.arr[i][j], i: i, j: j});
      }
    }
    this.userDetails = this.lightsOutService.currentUser;
    // this.countdownTimer1();
  }

  onCLick(value, i, j) {
    this.myMoves++;

    this.arr[i][j] = !this.arr[i][j];
    if(i > 0 && i < 4 && j > 0 && j < 4) {
      this.arr[i - 1][j] = !this.arr[i - 1][j];
      this.arr[i + 1][j] = !this.arr[i + 1][j];
      this.arr[i][j - 1] = !this.arr[i][j - 1];
      this.arr[i][j +1] = !this.arr[i][j + 1];
    }

    if(i === 0 && j === 0) {
      this.arr[i+1][j] = !this.arr[i+1][j];
      this.arr[i][j+1] = !this.arr[i][j+1];
    }

    if(i === 0 && j === 4) {
      this.arr[i+1][j] = !this.arr[i+1][j];
      this.arr[i][j-1] = !this.arr[i][j-1];
    }

    if(i === 4 && j === 0) {
      this.arr[i-1][j] = !this.arr[i-1][j];
      this.arr[i][j+1] = !this.arr[i][j+1];
    }

    if(i === 4 && j === 4) {
      this.arr[i-1][j] = !this.arr[i-1][j];
      this.arr[i][j-1] = !this.arr[i][j-1];
    }

    if(i > 0 && i < 4 && j === 0) {
      this.arr[i - 1][j] = !this.arr[i - 1][j];
      this.arr[i + 1][j] = !this.arr[i + 1][j];
      this.arr[i][j +1] = !this.arr[i][j + 1];
    }

    if(i > 0 && i < 4 && j === 4) {
      this.arr[i - 1][j] = !this.arr[i - 1][j];
      this.arr[i + 1][j] = !this.arr[i + 1][j];
      this.arr[i][j - 1] = !this.arr[i][j - 1];
    }

    if(j > 0 && j < 4 && i === 0) {
      this.arr[i + 1][j] = !this.arr[i + 1][j];
      this.arr[i][j - 1] = !this.arr[i][j - 1];
      this.arr[i][j +1] = !this.arr[i][j + 1];
    }
    if(j > 0 && j < 4 && i === 4) {
      this.arr[i - 1][j] = !this.arr[i - 1][j];
      this.arr[i][j - 1] = !this.arr[i][j - 1];
      this.arr[i][j +1] = !this.arr[i][j + 1];
    }
    
    this.replicaArr = [];
    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 5; j++) {
        this.replicaArr.push({value: this.arr[i][j], i: i, j: j});
      }
    }

    for(let key of this.replicaArr) {
      if(key.value === true) {
        this.isWin = false;
        break;
      }
      this.isWin = true;
    }
    if(this.isWin === true) {
      this.http.post(
        "https://angular-test-project-1a856-default-rtdb.firebaseio.com/leaderboard.json", 
        { username: this.userDetails.userName, branch:this.userDetails.branch, moves: this.myMoves }
        ).subscribe((data) => {

        });
      this.matchSituation = "won";
    }   
  }

  restartGame() {
    // this.countdownTimer2();
    this.myMoves = 0;
    this.arr = this.lightsOutService.patternArray[Math.floor((Math.random()*50))];
    this.replicaArr = [];
    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 5; j++) {
        this.replicaArr.push({value: this.arr[i][j], i: i, j: j});
      }
    }
  }

  playAgain() {
    this.restartGame();
    this.matchSituation = "running";
  }

  endGame() {
    this.matchSituation = 'end-game';
  }
}
