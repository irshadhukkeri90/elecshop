import { Component, OnInit } from '@angular/core';
import{ ApiService} from '../../Services/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items:[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.api.getJson().subscribe(resp=>{
      this.items = resp
    })
  }


}
