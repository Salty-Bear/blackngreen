import { Component,Inject } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


import * as Aos from 'aos';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:AuthService,private snackbar:MatSnackBar){}

  ngOnInit(){
    Aos.init();
    this.auth.autologin()
    this.checkScreenWidth()
  }

  isMobile=false
  openSnackBar(message:string){
    console.log('helo')
    this.snackbar.open(message,'Undo',{
      duration:5000
    })
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth <= 768;
  }

  //Sign in with google function
  signInWithGoogle(){
    this.auth.googleSignIn()
  }


  //Sign in with github function
  signInWithGit(){
    this.auth.githubSignIn()
  }
}

