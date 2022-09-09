import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/others/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  handleSearch(value:string){
    this.filtro_valor = value
  }

  filtro_valor = ''

  constructor(
    private _http: HttpClient
  ){}

  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe
    ((users:any) => this.usuarios = users)
  }

  usuarios :Iuser[] =[]
}
