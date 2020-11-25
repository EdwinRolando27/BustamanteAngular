import { Component, OnInit } from '@angular/core';
import { PeruService } from 'src/app/services/peruservices';

@Component({
  selector: 'app-pais-peru',
  templateUrl: './pais-peru.component.html',
  styleUrls: ['./pais-peru.component.css']
})
export class PaisPeruComponent implements OnInit {

  title = 'BustamanteAngular';
  public datos: Array<any> = []
  estado: boolean
  constructor(private peruService: PeruService){
    this.peruService.getPais().subscribe((resp:any) =>{
      console.log(resp)
      this.datos = resp
      this.estado = false;
    })
  }
  ngOnInit(): void {
  }
  showDatos(){
    return this.estado= !this.estado;
  }

}
