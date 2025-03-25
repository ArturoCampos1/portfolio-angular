import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  num: String = '';
  mail: String = '';

  mostrarNum(){
    this.num = '+34 663 91 86 36';
  }

  mostrarMail(){
    this.mail = 'arturocamposrufo13@gmail.com';
  }

  goLinkedin(){
    window.location.href = "https://www.linkedin.com/in/arturo-campos-rufo/";
  }

}
