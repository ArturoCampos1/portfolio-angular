import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {

  name: string = '';
  text: string = '';
  menuVisible: boolean = true;
  rest: string = '';

  menu = [
    {
      id: 1,
      img: 'user profile.png',
      name: 'Sobre mí',
      text: 'Soy Arturo Campos, tengo 18 años. Tengo un profundo interés en la programación y el desarrollo tecnológico. Me estoy formando y tengo cierta inquietud en la exploración de diferentes lenguajes y herramientas de programación. Mi enfoque es el aprendizaje continuo y la mejora de mis competencias. Actualmente, estoy adquiriendo conocimientos en desarrollo de aplicaciones con Java, con el objetivo de en un futuro contribuir proyectos que generen un impacto real.'
    },
    {
      id: 2,
      img: 'Academic Background.png',
      name: 'Educación',
      text: '',
      educacion: [
        { grado: 'Grado Medio', especialidad: 'Informática y Comunicaciones', rama: 'Técnico en Sistemas Microinformáticos y Redes', año: '2022 - 2024' },
        { grado: 'Grado Superior', especialidad: 'Informática y Comunicaciones', rama: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma', año: '2024 - Presente' }
      ]
    },
    {
      id: 3,
      img: 'Work Ethic.png',
      name: 'Experiencia',
      text: '',
      experiencia: [
        { trabajo: 'Técnico Informático', empresa: 'Sevilla Computer', fecha: 'marzo 2024 - junio 2024 · 4 meses', img: 'sevillacomputer.png' },
        { trabajo: 'Desarrollador Java', empresa: 'Ayesa', fecha: 'feb 2025 - mar 2025 · 1 mes', img: 'ayesa.jpg'}
      ]
    },
    {
      id: 4,
      img: 'Validation.png',
      name: 'Formaciones',
      text: '',
      formaciones: [
        { nombre: 'B1', emision: 'Cambridge University', fecha: 'junio 2024', img: 'cambridgeico.png' },
        { nombre: 'CCNNA: Introduction to Networks', emision: 'Cisco', fecha: 'julio 2023', img: 'cisco.png' },
        { nombre: 'Curso de HTML5 y CSS3', emision: 'OpenWebinars', fecha: 'enero 2024', img: 'openwebinars.png' },
        { nombre: 'Curso de Responsive Web Design', emision: 'OpenWebinars', fecha: 'diciembre 2023', img: 'openwebinars.png' },
      ]
    }
  ]

  mostrarInfo(idE: number) {
    this.menuVisible = false;
    const item = this.menu.find(item => item.id === idE);
    if (item) {
      this.name = item.name;
      this.text = item.text;
      this.rest = '<div class="oculto"></div>';

      if (item.educacion) {

        this.rest = item.educacion.map(edu =>
          `<div class="educacion-item">
            <p><strong>${edu.grado}</strong> - ${edu.especialidad} (${edu.rama}) - Fecha: ${edu.año}</p>
          </div>`
        ).join('');
      } else if (item.experiencia) {
        this.rest = item.experiencia.map(exp =>
          `<div class="educacion-item">
            <img src = "${exp.img}" alt="${exp.trabajo}" width="40px">
            <p><strong>${exp.trabajo}</strong> en ${exp.empresa} - Fecha: ${exp.fecha}</p>
          </div>`
        ).join('');
      } else if (item.formaciones) {
        this.rest = item.formaciones.map(form =>
          `<div class="educacion-item">
            <p><img src = "${form.img}" alt="${form.nombre}" width="40px"><strong>${form.nombre}</strong> - Emitido por ${form.emision} - Fecha: ${form.fecha}</p>
          </div>`
        ).join('');
      }
    }
  }

  desaparecer() {
    this.menuVisible = true;
  }
}
