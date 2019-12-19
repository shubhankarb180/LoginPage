import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';


export interface Config {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  testing: [];
  constructor( private loginService: LoginService) { }

  getCredentials() {
    this.loginService.getCredentials().subscribe(
      response => {
        const loginList = response;
        for(let i=0; i < loginList.length ; i++) {
          console.log(loginList[i]);
        }
      }
    );
  }

  onSubmitCheck(data) {
    let success = false;
    const successBox = document.getElementById("successBox");
    const failedBox = document.getElementById("failedBox");
    this.loginService.getCredentials().subscribe(
      response => {
        const loginList = response;
        // console.log(response[0].username);
        // console.log(response[0].password);
        // console.log(data.username);
        // console.log(data.pass);
        for( let i = 0; i < loginList.length ; i++){
          if (response[i].username === data.username && response[i].password === data.pass){
            success = true;
          }
        }
        if ( success === true)
          successBox.style.visibility = "visible";
        else
          failedBox.style.visibility = "visible";
      }
    );
    return success;
  }

  ngOnInit() {
    this.getCredentials();
  }

}
