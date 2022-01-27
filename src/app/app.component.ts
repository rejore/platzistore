import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  status = false;
  newName = '';
  usuario = {
     name:'rejore',
     age:18,
     amigos:["enrima", "jayon", "milagros"]
  };
  register = {
     name: '',
     email: '',
     password: ''
  };
  box = {
     width: 10,
     height: 10,
     background: 'red'
  };
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  onStatus(){
       this.status = !this.status;
  }

  onRegister(){
    console.log(this.register);
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onKeyup(event: Event){
    const element = event.target as HTMLInputElement;
    this.usuario.name = element.value;
  }
  addAmigo(){
    this.usuario.amigos.push(this.newName);
    this.newName = '';
  }

  deleteAmigo(i){
    this.usuario.amigos.splice(i,1);
  }

  /*deleteAmigo(){
     this.usuario.amigos = this.usuario.amigos.filter(amigo => amigo !=this.newName)
  }*/
}
