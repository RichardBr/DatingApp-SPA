import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  users: User[];
  likesParam: any = {};
  pagination: Pagination;

  constructor(private authService: AuthService,
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['usersResolver'].result;
      this.pagination = data['usersResolver'].pagination;
    });
    // if ()

    this.likesParam = 'Likers';
  }

  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
      .subscribe((paginatedResult: PaginatedResult<User[]>) => {
        this.users      = paginatedResult.result;
        this.pagination = paginatedResult.pagination;
      },
      error => {
        this.alertify.error(error);
      });
    }

    pageChanged(event: any): void {
      this.pagination.currentPage = event.page;
      // this.loadUsers();
    }
}
