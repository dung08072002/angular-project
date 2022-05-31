import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: IUser = {
    username: "",
    email: "",
    password: "",
  }
  constructor(
    private userService: UserService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.signUp(this.user).subscribe(data => {
      this.router.navigate(['/signin'])
    })
  }
}
