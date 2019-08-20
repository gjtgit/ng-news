import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favrites',
  templateUrl: './favrites.component.html',
  styleUrls: ['./favrites.component.scss']
})
export class FavritesComponent implements OnInit {
  articles:any;
  constructor(private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.getFavrites();
  }
  
  getFavrites(){
    const val = localStorage.getItem('items');
    if(val != null){
      this.articles = JSON.parse(val);
    }
  }

  onUnFavorite(article){
    const index = this.articles.indexOf(article);
    this.articles.splice(index,1);
    localStorage.setItem('items', JSON.stringify(this.articles));
    this.snackBar.open('Favorite removed','ok',{
      duration:3000
    })
  }
}
