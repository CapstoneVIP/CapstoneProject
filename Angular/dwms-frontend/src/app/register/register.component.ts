import {Component, OnInit} from '@angular/core';
import {AuthService} from "../providers/auth.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router, ActivatedRoute } from "@angular/router";
import { RouterLink } from '@angular/router';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService: AuthService, private fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
  }

}
