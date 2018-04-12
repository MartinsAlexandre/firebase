import { Component, NgModule } from '@angular/core';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { } from "rxjs/add/operator/map";
import { Title } from '@angular/platform-browser';
import { Action } from 'rxjs/scheduler/Action';

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  //posts: Observable<Post[]>

  title: string;
  content: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    //this.posts = this.postsCol.valueChanges();    
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
  }

  addPost() {
    this.afs.collection('posts').add({ 'title': this.title, 'content': this.content });
    //this.afs.collection('posts').doc('ay-custom-id').set({ 'title': this.title, 'content': this.content });
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/' + postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('posts/' + postId).delete();
  }

}
