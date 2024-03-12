import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import {ContentCardComponent} from '../content-card/content-card.component';
import {FilterTypePipe} from '../filter-type.pipe';
import {CreateContentComponent} from '../create-content/create-content.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FilterTypePipe, FormsModule, CreateContentComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentArray: Content[] = [
    {
      id:1,
      "title": "Spirited Away",
      "description": "Embark on a mesmerizing journey with Chihiro, a young girl trapped in a mysterious and magical world. 'Spirited Away' is a captivating anime masterpiece that explores themes of courage, friendship, and the magic that resides within us.",
      "imgURL": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      "creator": "Studio Ghibli",
      tags: ['Bat', 'Drive', 'Analysis'],
      type: "Fiction, Family Drama"
    },
    {
      id:2,
      "title": "Attack on Titan",
      "description": "Dive into a world where humanity fights for survival against gigantic humanoid creatures known as Titans. 'Attack on Titan' is an intense and action-packed anime that delves into the complexities of power, sacrifice, and the mysteries of a post-apocalyptic world.",
      "imgURL": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      "creator": "Wit Studio",
      tags: ['Cricket', 'tutorial', 'training', 'video'],
      type: "Mythological Fiction"
    },
    
    {
      id:3,
      "title": "My Hero Academia",
      "description": "In a society where superpowers, or 'Quirks,' are the norm, follow the journey of Izuku Midoriya as he strives to become the greatest hero. 'My Hero Academia' is a thrilling anime that explores heroism, friendship, and the challenges of mastering one's abilities.",
      "imgURL": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12923839_b_v8_aa.jpg",
      "creator": "Bones Inc.",
      tags: ['Commentary', 'debate', 'sports', 'pitch review'],
      type: "Mythological Fiction", 
    },
    {
      id:4,
      "title": "Spirited Away",
      "description": "Embark on a mesmerizing journey with Chihiro, a young girl trapped in a mysterious and magical world. 'Spirited Away' is a captivating anime masterpiece that explores themes of courage, friendship, and the magic that resides within us.",
      "imgURL": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      "creator": "Studio Ghibli",
      tags: ['Bat', 'Drive', 'Analysis'],
      type: "Classic, Legal Drama"
    },
    {
      id:5,
      "title": "Attack on Titan",
      "description": "Dive into a world where humanity fights for survival against gigantic humanoid creatures known as Titans. 'Attack on Titan' is an intense and action-packed anime that delves into the complexities of power, sacrifice, and the mysteries of a post-apocalyptic world.",
      "imgURL": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      "creator": "Wit Studio",
      tags: ['Cricket', 'tutorial', 'training', 'video'],
      type: "Fiction, Family Drama"
    },
    
    {
      id: 6,
      title: 'Ball',
      description: 'A cricket ball is a hard, solid ball used to play cricket. A cricket ball consists of a cork core wound with string then a leather cover stitched on, and manufacture is regulated by cricket law at first-class level.',
      creator: 'SG',
      "imgURL": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      tags: ['Ball', 'sports', 'material'],
      type: "Classic, Legal Drama", 
    },
    
    {
      id:7,
      "title": "Attack on Titan",
      "description": "Dive into a world where humanity fights for survival against gigantic humanoid creatures known as Titans. 'Attack on Titan' is an intense and action-packed anime that delves into the complexities of power, sacrifice, and the mysteries of a post-apocalyptic world.",
      "imgURL": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg",
      "creator": "Wit Studio",
      tags: ['Cricket', 'tutorial', 'training', 'video'],
     
      
    },
  ];

  filterContent: Content[] = [];
  title:string = '';
  message: string = '';
  isFound: boolean = false;

  checkTitle(){
    this.filterContent = this.contentArray.filter(item => item.title.toLowerCase() === this.title.toLowerCase());

    this.isFound = this.filterContent.length > 0;
    
    this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }

    //Method to handle the submission of new content items; param of type 'Content'
    handleContentSubmission(newContent: Content) {
    //Ensuring id is a number
    newContent.id = Number(newContent.id);
    //Not working - this.contentArray.push(newContent);
    
    //Creates a new array by taking the existing contentArray into a new one
    //Then it appends the newContent object to the new array
    this.contentArray = [...this.contentArray, newContent];

    //Debug
    console.log(this.contentArray)
    //output title of new content item
    console.log("Success! New content added: ", newContent.title)
  }


  constructor(){

  }
}
