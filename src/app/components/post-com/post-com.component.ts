import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/myservices';

@Component({
  selector: 'app-post-com',
  templateUrl: './post-com.component.html',
  styleUrls: ['./post-com.component.css']
})
export class PostComComponent implements OnInit {

  title = 'BustamanteAngular';
  public datos: Array<any> = []
  estado: boolean
  constructor(private datosService: DatosService){
    this.datosService.getDatos().subscribe((resp:any) =>{
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
