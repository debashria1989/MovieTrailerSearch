import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { YoutubeService } from '../services/youtube.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topMoviesFromIMDB = [];
  videosfromYoutube = [];
  actionMoviesFromIMDB = [];
  dramaMoviesFromIMDB = [];
  crimeMoviesFromIMDB = [];
  thrillerMoviesFromIMDB = [];
  romanticMoviesFromIMDB = [];
  comedyMoviesFromIMDB = [];
  animatedMoviesFromIMDB = [];
  adventureMoviesFromIMDB = [];

  searchText: string='';
  searchFilter: string='';

  showSearchResults: boolean = false;
  showHomePage : boolean = false;

  showActionMovies = false;
  showDramaMovies = false;
  showRomanticMovies = false;
  showComedyMovies = false;
  showAnimationMovies = false;
  showAdventureMovies = false;
  showCrimeMovies = false;
  showThrillerMovies = false;
  showAllMovies = false;


  constructor(private movies:MoviesService,
      private youtubeVideo:YoutubeService,
      public router: Router){}

  ngOnInit():void{
    this.showHomePage = true;
    this.showSearchResults = false;

    this.movies.getTopMoviesfromIMDB().subscribe((data) => {
      this.topMoviesFromIMDB =  data;
      this.getMoviesByGenre(data);
    });
  }

  //Fetch Movies based on genre
  getMoviesByGenre(data){
    data.forEach(movie => {
        if(movie.genre.includes('Action')){
          this.actionMoviesFromIMDB.push(movie);
        }
        if(movie.genre.includes('Drama')){
          this.dramaMoviesFromIMDB.push(movie);
        }
        if(movie.genre.includes('Crime')){
          this.crimeMoviesFromIMDB.push(movie);
        }
        if(movie.genre.includes('Thriller')){
          this.thrillerMoviesFromIMDB.push(movie);
        }
        if(movie.genre.includes('Romance')){
          this.romanticMoviesFromIMDB.push(movie);
        }
        if(movie.genre.includes('Comedy')){
          this.comedyMoviesFromIMDB.push(movie);
        }
        if(movie.genre.includes('Animation')){
          this.animatedMoviesFromIMDB.push(movie);
        }
        if(movie.genre.includes('Adventure')){
          this.adventureMoviesFromIMDB.push(movie);
        }
    });
  }

  /* Movie Search Results */
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    this.showSearchResults = true;
    this.showHomePage = false;
    this.getVideosFromYoutube(this.searchText);

  }

  /* Selected Search Filter */
  onSearchFilterSelect(searchFilter: string){
    this.searchFilter = searchFilter;
    console.log("Home Component:selected search Filter-"+this.searchFilter);
    if(this.searchFilter.includes('Filter')){
      this.showAllMovies = true;
      this.showActionMovies = false;
      this.showDramaMovies = false;
      this.showCrimeMovies = false;
      this.showThrillerMovies = false;
      this.showRomanticMovies = false;
      this.showComedyMovies = false;
      this.showAnimationMovies = false;
      this.showAdventureMovies= false;
    }
    if(this.searchFilter.includes('Action')){
      this.showAllMovies = false;
      this.showActionMovies = true;
      this.showDramaMovies = false;
      this.showCrimeMovies = false;
      this.showThrillerMovies = false;
      this.showRomanticMovies = false;
      this.showComedyMovies = false;
      this.showAnimationMovies = false;
      this.showAdventureMovies= false;
    }
    if(this.searchFilter.includes('Drama')){
      this.showAllMovies = false;
      this.showActionMovies = false;
      this.showDramaMovies = true;
      this.showCrimeMovies = false;
      this.showThrillerMovies = false;
      this.showRomanticMovies = false;
      this.showComedyMovies = false;
      this.showAnimationMovies = false;
      this.showAdventureMovies= false;    
    }
    if(this.searchFilter.includes('Crime')){
      this.showAllMovies = false;
      this.showActionMovies = false;
      this.showDramaMovies = false;
      this.showCrimeMovies = true;
      this.showThrillerMovies = false;
      this.showRomanticMovies = false;
      this.showComedyMovies = false;
      this.showAnimationMovies = false;
      this.showAdventureMovies= false;
    }
    if(this.searchFilter.includes('Thriller')){
      this.showAllMovies = false;
      this.showActionMovies = false;
      this.showDramaMovies = false;
      this.showCrimeMovies = false;
      this.showThrillerMovies = true;
      this.showRomanticMovies = false;
      this.showComedyMovies = false;
      this.showAnimationMovies = false;
      this.showAdventureMovies= false;
    }
    if(this.searchFilter.includes('Romantic')){
      this.showAllMovies = false;
      this.showActionMovies = false;
      this.showDramaMovies = false;
      this.showCrimeMovies = false;
      this.showThrillerMovies = false;
      this.showRomanticMovies = true;
      this.showComedyMovies = false;
      this.showAnimationMovies = false;
      this.showAdventureMovies= false;
    }
    if(this.searchFilter.includes('Comedy')){
      this.showAllMovies = false;
      this.showActionMovies = false;
      this.showDramaMovies = false;
      this.showCrimeMovies = false;
      this.showThrillerMovies = false;
      this.showRomanticMovies = false;
      this.showComedyMovies = true;
      this.showAnimationMovies = false;
      this.showAdventureMovies= false;
    }
    if(this.searchFilter.includes('Animation')){
      this.showAllMovies = false;
      this.showActionMovies = false;
      this.showDramaMovies = false;
      this.showCrimeMovies = false;
      this.showThrillerMovies = false;
      this.showRomanticMovies = false;
      this.showComedyMovies = false;
      this.showAnimationMovies = true;
      this.showAdventureMovies= false;
    }
    if(this.searchFilter.includes('Adventure')){
      this.showAllMovies = false;
      this.showActionMovies = false;
      this.showDramaMovies = false;
      this.showCrimeMovies = false;
      this.showThrillerMovies = false;
      this.showRomanticMovies = false;
      this.showComedyMovies = false;
      this.showAnimationMovies = false;
      this.showAdventureMovies= true;
    }
  }


  searchedMovieExists(){
    for(let movie of this.topMoviesFromIMDB){
      if(movie.title.toLowerCase().includes(this.searchText.toLowerCase())){
        return true;
      }
    }
    return false;
  }

  getVideosFromYoutube(searchVideo){
    this.youtubeVideo.getVideosFromYouTubeAPI(searchVideo).subscribe((data) =>
        this.videosfromYoutube = data.items
    )
  }

}
