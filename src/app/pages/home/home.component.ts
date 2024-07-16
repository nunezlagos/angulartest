import { Component } from '@angular/core';
import { NavbarComponent } from '../../layaout/navbar/navbar.component';
import { FooterComponent } from '../../layaout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
