import {Component, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../interfaces/user-I/iuser';
import {EventEmitter} from '@angular/core';
import {PostService} from '../../services/post-S/post.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  @Output()
  eventEmitter = new EventEmitter();

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  takeUserPost(user: number): void {
    this.postService.getPostById(user).subscribe(value => this.eventEmitter.emit(value));
  }
}
