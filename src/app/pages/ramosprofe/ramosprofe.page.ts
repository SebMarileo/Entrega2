import { Component, OnInit } from '@angular/core';
import { ApiDjangoService } from 'src/app/services/api-django.service';
@Component({
  selector: 'app-ramosprofe',
  templateUrl: './ramosprofe.page.html',
  styleUrls: ['./ramosprofe.page.scss'],
})
export class RamosprofePage implements OnInit {

  constructor(private api: ApiDjangoService ) { }

  ngOnInit() {
  }

  listar(){
    this.api.listarTodo().subscribe(
    (resp)=>{
      console.log(resp);
    },
    (e)=>{
      console.log(e);
    }
    );
  }

}
