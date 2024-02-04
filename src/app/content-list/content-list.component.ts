import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from "../content-card/content-card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [ContentCardComponent,CommonModule]
})
export class ContentListComponent implements OnInit{
  AimeContent: Content[];
  constructor(){
    this.AimeContent=[];
  }

  ngOnInit(): void {
    
  
   this.AimeContent =[
    {
      id:1,
      "title": "Spirited Away",
      "description": "Embark on a mesmerizing journey with Chihiro, a young girl trapped in a mysterious and magical world. 'Spirited Away' is a captivating anime masterpiece that explores themes of courage, friendship, and the magic that resides within us.",
      "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      "type": "Fantasy, Adventure",
      "creator": "Studio Ghibli",
      tags: ['Bat', 'Drive', 'Analysis']
   
     },
    {
      id:2,
      "title": "Attack on Titan",
      "description": "Dive into a world where humanity fights for survival against gigantic humanoid creatures known as Titans. 'Attack on Titan' is an intense and action-packed anime that delves into the complexities of power, sacrifice, and the mysteries of a post-apocalyptic world.",
      "imgUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      "type": "Action, Dark Fantasy",
      "creator": "Wit Studio",
      tags: ['Cricket', 'tutorial', 'training', 'video']
    },
    {
      id:3,
      "title": "My Hero Academia",
      "description": "In a society where superpowers, or 'Quirks,' are the norm, follow the journey of Izuku Midoriya as he strives to become the greatest hero. 'My Hero Academia' is a thrilling anime that explores heroism, friendship, and the challenges of mastering one's abilities.",
      "imgUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12923839_b_v8_aa.jpg",
      "type": "Action, Superhero",
      "creator": "Bones Inc.",
      tags: ['Commentary', 'debate', 'sports', 'pitch review']
    },
    {
      id:4,
      "title": "Spirited Away",
      "description": "Embark on a mesmerizing journey with Chihiro, a young girl trapped in a mysterious and magical world. 'Spirited Away' is a captivating anime masterpiece that explores themes of courage, friendship, and the magic that resides within us.",
      "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      "type": "Fantasy, Adventure",
      "creator": "Studio Ghibli",
      tags: ['Bat', 'Drive', 'Analysis']
   
     },
    {
      id:5,
      "title": "Attack on Titan",
      "description": "Dive into a world where humanity fights for survival against gigantic humanoid creatures known as Titans. 'Attack on Titan' is an intense and action-packed anime that delves into the complexities of power, sacrifice, and the mysteries of a post-apocalyptic world.",
      "imgUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      "type": "Action, Dark Fantasy",
      "creator": "Wit Studio",
      tags: ['Cricket', 'tutorial', 'training', 'video']
    },
    {
      id: 6,
      title: 'Ball',
      description: 'A cricket ball is a hard, solid ball used to play cricket. A cricket ball consists of a cork core wound with string then a leather cover stitched on, and manufacture is regulated by cricket law at first-class level.',
      creator: 'SG',
      "imgUrl": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      type: 'Description',
      tags: ['Ball', 'sports', 'material']
    },
   
  ];

}
}
