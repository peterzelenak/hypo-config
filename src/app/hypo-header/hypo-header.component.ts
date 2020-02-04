import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-hypo-header',
  templateUrl: './hypo-header.component.html',
  styleUrls: ['./hypo-header.component.css']
})
export class HypoHeaderComponent implements OnInit {

  user;

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.warn('soosos');
    this.user = this.userService.getUser();
  }

}