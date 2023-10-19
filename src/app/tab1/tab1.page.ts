import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../Models/Usuario.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  listaUsuarios: Usuario[]=[];
  usuario?: Usuario;
  id: number = 0;
  // para buscar dados da API, depois de criar o serviço,
  //  temos que instanciar em uma variavel o serviço criado
  constructor(private userService: UsuarioService) {}

  // Criar os metodos que conversam com a api

  buscarUsuarios(){
    //Primeiro chamamos o metodo do serviço
    //Depois adicionamos o subscribe para receber
    //a resposta qunado ela chegar

    // adicionamos uma variavel que guarda o retorno
    //e enviamos ela para uma funcão anonima
    // demtrp da fimcap va,ps adicionar o retorno a variavel local
    this.userService.getAll().subscribe(retorno =>{
    // "as usuario[]" tenta covnerter o retorno para este tipo
    this.listaUsuarios = retorno as Usuario[];
    console.log(this.listaUsuarios)
    this.usuario = undefined;
  });
  }

  buscarPorID(){
    this.userService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno)
      this.usuario = retorno as Usuario;
      this.listaUsuarios = [];
    })
  }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  ionViewWillEnter()
{
  this.buscarUsuarios();
}
}
