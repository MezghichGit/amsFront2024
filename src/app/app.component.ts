import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContactComponent,
    StagiaireComponent,
    PostComponent,
    HttpClientModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SIP ACADEMY';
 contenuFormation : string = "FullStack Spring Boot Angular";
}
