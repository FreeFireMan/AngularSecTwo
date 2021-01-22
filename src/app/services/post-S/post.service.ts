import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../../interfaces/user-I/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClients: HttpClient) {
  }

  getPostById(postID): Observable<IPost> {
    return this
      .httpClients
      .get<IPost>(`https://jsonplaceholder.typicode.com/posts?userId=${postID}`);
  }
}
