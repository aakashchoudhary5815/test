import { Component } from '@angular/core';
import { AotSummaryResolver } from '@angular/compiler';
import AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angapp';
  constructor() { 
    this.loadScripts(); 
    AOS.init()
  }
  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
       'assets/js/jquery.min.js',
       'assets/js/popper.min.js',
       'assets/js/bootstrap.min.js',
       'assets/js/jquery.easing.min.js',
       'assets/js/swiper.min.js',
       'assets/js/jquery.magnific-popup.js',
       'assets/js/validator.min.js',
       'assets/js/scripts.js',
       'assets/js/hide.js',
       'assets/js/hide1.js',
       'node_modules/aos/dist/aos.js'
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    } 
 } 
}
