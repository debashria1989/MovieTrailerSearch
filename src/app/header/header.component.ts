import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() searchText:string;
  @Input() topMoviesFromIMDB:any;
  @Input() videosfromYoutube:any;

  socialShareVideoId: any;
  showAllMovies: boolean;
  showActionMovies: boolean;
  showDramaMovies: boolean;
  showCrimeMovies: boolean;
  showThrillerMovies: boolean;
  showRomanticMovies: boolean;
  showAdventureMovies: boolean;
  showComedyMovies: boolean;
  showAnimatedMovies: boolean;
  
  actionMoviesFromIMDB = [];
  dramaMoviesFromIMDB = [];
  crimeMoviesFromIMDB = [];
  thrillerMoviesFromIMDB = [];
  romanticMoviesFromIMDB = [];
  comedyMoviesFromIMDB = [];
  animatedMoviesFromIMDB = [];
  adventureMoviesFromIMDB = [];
  movieCategories = ['Action','Drama','Crime','Thriller','Romantic','Comedy','Animation','Adventure'];


  constructor() {}

  ngOnInit(): void {
  }

  enteredSearchValue: string = '';
  selectedSearchFilter: string = '';
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  searchFilter: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
    this.getSocialShareVideoId(this.enteredSearchValue);
   // $("#searchFilters").val("filter").change();
  }

  /*Search Filter Code */
  showMoviesBySelectedFilter(filter:string){
    console.log("the selected filter is " +filter);
    this.selectedSearchFilter = filter;
    this.searchFilter.emit(this.selectedSearchFilter);
  }
  /*Search Filter Code Ends*/

  getSocialShareVideoId(searchedVideo){
    let showResultsFromIMDB = false;
    for(let movie of this.topMoviesFromIMDB){
      if(movie.title.toLowerCase().includes(searchedVideo.toLowerCase())){
        showResultsFromIMDB = true;
        this.socialShareVideoId = movie.trailer.substr(movie.trailer.lastIndexOf('/')+1);
      } else{
        showResultsFromIMDB = false
      }
    }
    if(searchedVideo == ''){
      this.socialShareVideoId="";
    }
  }

}
