import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user-S/user.service';
import {IUser} from '../../interfaces/user-I/iuser';
import {IPost} from '../../interfaces/user-I/ipost';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: IUser[];
  ChosenPost: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(value => this.user = value);
  }

  getPost(post: IPost): void {
    this.ChosenPost = post;
  }
}
