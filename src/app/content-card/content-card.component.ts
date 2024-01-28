import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  Books:ContentList= new ContentList();
  constructor(){
    this.Books.add({
      id:1,
      "title": "Spirited Away",
      "description": "Embark on a mesmerizing journey with Chihiro, a young girl trapped in a mysterious and magical world. 'Spirited Away' is a captivating anime masterpiece that explores themes of courage, friendship, and the magic that resides within us.",
      "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      "type": "Fantasy, Adventure",
      "creator": "Studio Ghibli"

    })

    this.Books.add({
      id:2,
      "title": "Attack on Titan",
      "description": "Dive into a world where humanity fights for survival against gigantic humanoid creatures known as Titans. 'Attack on Titan' is an intense and action-packed anime that delves into the complexities of power, sacrifice, and the mysteries of a post-apocalyptic world.",
      "imgUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      "type": "Action, Dark Fantasy",
      "creator": "Wit Studio"

    })
    this.Books.add({
      id:3,
      "title": "My Hero Academia",
      "description": "In a society where superpowers, or 'Quirks,' are the norm, follow the journey of Izuku Midoriya as he strives to become the greatest hero. 'My Hero Academia' is a thrilling anime that explores heroism, friendship, and the challenges of mastering one's abilities.",
      "imgUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12923839_b_v8_aa.jpg",
      "type": "Action, Superhero",
      "creator": "Bones Inc."

    })

  }}
