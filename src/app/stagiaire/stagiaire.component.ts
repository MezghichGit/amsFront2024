import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirstLetterUpperCasePipe } from "../first-letter-upper-case.pipe";

@Component({
    selector: 'app-stagiaire',
    standalone: true,
    templateUrl: './stagiaire.component.html',
    styleUrl: './stagiaire.component.css',
    imports: [CommonModule, FirstLetterUpperCasePipe]
})
export class StagiaireComponent {
  formation: string = "Angular";
  formateur : string = "Dr. Mohamed Amine MEZGHICH";
  stagiaires : string[]=["sofien","marwa","hakim","borel","fares","atef"];

}
