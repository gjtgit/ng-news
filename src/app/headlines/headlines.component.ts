import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  categories = [
    "Technology",
    "China",
    "Sports",
    "Business",
    "Science"
  ];
  news : any;
  
  constructor(private newsService: NewsService, private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }

  onGetCategoryData(category){
    console.log(category);
    this.getCategoryData(category);
  }

  getCategoryData(category){
    //this.newsService.getData("everything?q=bitcon").subscribe(
    this.newsService.getData("search?category="+category.toLowerCase()).subscribe(
      data=>{
        this.news = data;
      }
    );
  }

  onFavrite(article){
    console.log(article);
    let items = [];
    const val = localStorage.getItem('items');
    if(val != null){
      items = JSON.parse(val);
    }
    items.push(article);
    localStorage.setItem('items',JSON.stringify(items));
    this.snackBar.open('Favorite added','ok',{
      duration:3000
    })
  }
}
