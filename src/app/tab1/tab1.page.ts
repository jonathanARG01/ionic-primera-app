import { Component, OnInit } from '@angular/core';



@Component({
  	selector: 'app-tab1',
  	templateUrl: 'tab1.page.html',
  	styleUrls: ['tab1.page.scss']
})



export class Tab1Page implements OnInit {


	constructor() {}


	
	ngOnInit() {

		// Depurar código (la app se detendrá en este punto)
		//debugger;

		console.log('Hola Mundo');
	
	}

	  
}
