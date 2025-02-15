import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private service: DataService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(14),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    const token = localStorage.getItem('petshop.token');
    if (token){
      console.log('Autenticando...')
      this
      .service
      .refreshToken()
      .subscribe(
        (data : any) => {
          localStorage.setItem('petshop.token', data.token)
        },
        (err) => {
          localStorage.clear();
        }
      )
    }
  }

  submit(){
    this.service.authenticate(this.form.value)
    .subscribe((data: any)=> {
      localStorage.setItem('petshop.token', data.token)
    },
    (err) => {
      console.log(err);
    }
  )
  }
}
