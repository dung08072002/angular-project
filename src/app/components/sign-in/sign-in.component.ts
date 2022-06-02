import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userSignIn: IUser = {
    email: "",
    password: "",
  }
  constructor(
    private userService: UserService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.signIn(this.userSignIn).subscribe(data => {
      // console.log(data);
      if(data){
        localStorage.setItem("user", JSON.stringify(data));
        this.router.navigate(['/']);
      }
    })
  }
}
