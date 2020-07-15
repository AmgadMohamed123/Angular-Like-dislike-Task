import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-like-dislike-component',
  templateUrl: './like-dislike-component.component.html',
  styleUrls: ['./like-dislike-component.component.sass']
})
export class LikeDislikeComponent implements OnInit {

  likesCounter=100;
  dislikesCounter=25;
  increase=false;
  decrease=false;
  increaseLikes(){
    
      this.increase=!this.increase;
       if(this.increase){
       this.likesCounter+=1;
       this.dislikesCounter-=1;
       }else
       this.likesCounter-=1;
    }
  increaseDislikes(){
    this.decrease=!this.decrease;
    if(this.decrease){
    this.dislikesCounter+=1;
    this.likesCounter-=1;
    }else{
    this.dislikesCounter-=1;  
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
