import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test-app';

  scrollNavBar(){
    const navbar: HTMLElement | null = document.getElementById("navbar")!;

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
      navbar.style.backgroundColor = 'rgba(255,255,255,1)'
      navbar.style.transition = 'ease-out 2.5s'
    }else{
      navbar.style.backgroundColor = 'rgba(255,255,255,0)'
    }
  }

}
