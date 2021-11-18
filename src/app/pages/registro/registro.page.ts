import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { ApiLoginService } from "../../services/api-login.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email:string;
  public name:string;
  public password:string;

  constructor(private apiLogin : ApiLoginService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitRegister(){
    this.apiLogin.register(this.email, this.password, this.name).then( ress => {
      this.router.navigate(['/ingreso']).then(ress => alert('Registro Exitoso'))
    }).catch(err  => console.log(err))
  }

}
