import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  List = [];
  stats: [];

  ListUpdated: any;
  statsUpdated : any;
  type: any;
  updated: boolean;
  loader: boolean;
  constructor(private api: ApiService, private http: HttpClient) {
    this.updated = false;
    this.loader = false;
   }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.api.getList()
    .subscribe(data =>{
      this.List = data;

      data.forEach(element => {
        
        this.stats = element.stats;


      });
      

    })
  }


  evolve(heroName) {
    console.log(heroName);
    this.http.post(environment.urlList, 'evolve')
    .subscribe (data =>{
 

      
    console.log("POST Request is successful ", data);
    this.statsUpdated = data;
    
 
    this.updated = true;

      

    }, error =>{
      console.log('Error', error);
      this.loader = false;

    });

    }

  

}
