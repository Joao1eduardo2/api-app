import { UsuarioService } from './../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from './../Models/Usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
})
export class AlterarUsuarioPage implements OnInit {

  usuario!:Usuario;

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    // cria a variavel id
    // Pega o ID que veio na rota
    // Converte em Numero
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));

    this.userService.getOne(id).subscribe(retorno => {
      this.usuario = retorno;
      console.log(this.usuario);
    })
  }

}
