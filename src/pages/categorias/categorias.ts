import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: String = API_CONFIG.bucketBaseUrl;

  items: CategoriaDTO[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public categoraService: CategoriaService) {
  }

  ionViewDidLoad() {
    this.categoraService.findALL()
    .subscribe(response=>{
      this.items = response;
    },
    error=>{
      console.log(error);
    });
    


    
  }

}