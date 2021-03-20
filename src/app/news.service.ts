import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews(){
    return news;
  }

  getNewsById(newsId){
    return news.find(n => n.id === newsId)
  }

  getComments(){
    return comments;
  }

  getCommentsByNewsId(newsId){
    return comments.filter( c => c.newsId === newsId )
  }

  createComment(comment){
    return comments.push(comment)
  }

  setCommentsId(){
    return comments.length;
  }

  deleteComment(commentId){
    return delete comments[commentId]
  }

}


var news = [
  {
    id: 0,
    headline: 'Justice League 3 Would`ve Made Superman`s Son The New Batman',
    description: 'Justice League 3 would have ended with Superman and Lois`son becoming the new Batman, according to director Zack Snyder. Zack Snyder`s Justice League has finally landed on HBO Max with four years of fan anticipation behind it, but the film was never meant to be a standalone and was supposed to be the first in a Justice League trilogy. Snyder has spent the past few weeks leading up to the release of the Snyder Cut revealing what would have happened in his planned sequels. Justice League 2 would have featured the team facing off against the Legion of Doom, ending on a note where Darkseid kills Lois Lane and Superman succumbs to the Anti-Life equation, setting up the Knightmare future teased in Batman V Superman: Dawn of Justice and Zack Snyder`s Justice League. The third film would have seen an invasion by the New Gods and taken place in the Knightmare future. Snyder has even revealed that the third film would end with Batman dying, but now fans know there would have been another Batman.',
    date: new Date('March 21, 2021 00:00:00'),
    imageUrl: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/02/Batman-v-Superman.jpg?q=50&fit=crop&w=960&h=500'
  },
  {
    id: 1,
    headline: 'Black Widow Movie Theatrical Release Will Be Last-Minute Call Says Disney',
    description: 'Disney CEO Bob Chapek says Black Widow`s theatrical release will likely be a last-minute call. The long-awaited film was originally supposed to release in May 2020 and kick off the Marvel Cinematic Universe`s Phase 4. Of course, those plans were greatly disrupted by the ongoing coronavirus pandemic, and Black Widow has been delayed multiple times in the past year. It is now slated to come out in May 2021, but there are those in Hollywood convinced it will have to move again due to the uncertainty surrounding the theatrical marketplace. With COVID-19 vaccines being distributed and movie theaters reopening in major markets like Los Angeles and New York, there are reasons for optimism. However, there`s still a long way to go before something approaching the pre-pandemic normal. Medical experts believe theaters won`t be safe until a year after vaccines are readily available. Because of this, the upcoming summer movie calendar is in a state of flux, with multiple titles already moving back to the fall. Right now, Black Widow is standing firm in its May slot, but that could change at any given moment.',
    date: new Date('March 20, 2021 00:00:00'),
    imageUrl: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2021/02/Scarlett-Johansson-and-Florence-Pugh-in-Black-Widow.jpg?q=50&fit=crop&w=960&h=500'
  },
  {
    id: 2,
    headline: 'Godzilla vs Kong Marketing Could Be Repeating A King Of The Monsters Trick',
    description: 'Godzilla vs. Kong could be repeating a marketing trick from Godzilla: King of the Monsters involving a certain Toho spider. For the second time, some Godzilla devotees are thinking Kumonga may be about to join the MonsterVerse. Kumonga (AKA Spiga), is a gigantic spider who has made appearances in three of Toho`s Godzilla movies.In the Showa series, he was depicted as a resident of Monster Island, which was the home of Godzilla, Rodan, Anguirus, and more. He first came onto the scene in campy Toho classic, Son of Godzilla, as a monster that was terrorizing Godzilla`s son. Following his death at the hands of Godzilla, he was later reimagined as an ally in 1968`s Destroy All Monsters. He was one of a handful of kaiju who assisted Godzilla in taking down King Ghidorah. His most recent role came with 2004`s Godzilla: Final Wars where he served as one of many obstacles Godzilla had to face in his journey.',
    date: new Date('March 19, 2021 00:00:00'),
    imageUrl: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2021/03/Godzilla-vs-kong-Godzilla-king-of-the-monsters-marketing.jpg?q=50&fit=crop&w=960&h=500'
  },
]


var comments = [
  {
    id: 0,
    newsId: 0,
    userImage: 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png',
    user: 'User 1',
    comment: 'Batman!'
  },
  {
    id: 1,
    newsId: 0,
    userImage: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-512.png',
    user: 'User 2',
    comment: 'Superman!'
  },
  {
    id: 2,
    newsId: 1,
    user: 'User 3',
    userImage: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png',
    comment: 'Love Black Widow <3'
  },
  {
    id: 3,
    newsId: 1,
    user: 'User 4',
    userImage: 'https://www.dmdsolutions.co.in/images/resource/woman2.png',
    comment: 'Me too!'
  }
]
