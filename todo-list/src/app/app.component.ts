import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog, public router: Router) {}
  title: string = 'App root';
  darkThemed = false;
  isToggled = false

  onClick() {
   console.log('clicked')
  }
  redirectOnMain() {
    this.router.navigate([''])
  }
  goToAccount(){
    this.router.navigate(['account'])
  }
  toggleTheme() {
    let theme: string;
    document.body.className === 'dark'
      ? theme = 'light'
      : theme = 'dark'
    document.body.className = theme
    this.darkThemed = theme === 'dark' ? true : false
    localStorage.setItem('theme', JSON.stringify(theme))
  }
  ngOnInit() {
    const theme = localStorage.getItem('theme')
    if(theme) {
      const parsed = JSON.parse(theme) + ''
      document.body.className = parsed
      this.darkThemed = parsed === 'dark' ? true : false
    }
  }    
}
