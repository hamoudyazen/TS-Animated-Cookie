import { Component, Renderer2, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { gsap } from "gsap";
import { delay } from 'rxjs';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dunkick_website';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.src = '/assets/js/login.js';
    script.type = 'text/javascript';
    this.renderer.appendChild(document.head, script);

    const jsFiles = ['/assets/js/homepage.js', '/assets/js/bootstrap.bundle.js', '/assets/js/bootstrap.bundle.js',
      '/assets/js/bootstrap.bundle.min.js', '/assets/js/bootstrap.bundle.min.js.map', '/assets/js/bootstrap.bootstrap.esm.js',
      '/assets/js/bootstrap.js', '/assets/js/bootstrap.min.js'];

    for (let i = 0; i < jsFiles.length; i++) {
      const script = this.renderer.createElement('script');
      script.src = jsFiles[i];
      script.type = 'text/javascript';
      this.renderer.appendChild(document.head, script);
    }


    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.collectionGridItem3', { rotation: "1" }, { rotation: "5", delay: 0.5, ease: 'power1.inOut', yoyo: true, repeat: -1, duration: 3 });
    gsap.fromTo('.collectionGridItem2', { rotation: "1" }, { rotation: "-5", delay: 0.5, ease: 'power1.inOut', yoyo: true, repeat: -1, duration: 3 });
    gsap.fromTo('.collectionGridItem1', { rotation: "1" }, { rotation: "5", delay: 0.5, ease: 'power1.inOut', yoyo: true, repeat: -1, duration: 3 });
    gsap.fromTo('.collectionGridTitle', { scrollTrigger: 'collectionGridTitle', opacity: 0 }, { opacity: 1, delay: 0.5, ease: 'power1.inOut', duration: 3 });

    const tl2 = gsap.timeline({ defaults: { duration: 0.75, ease: "Power1.easeOut" } });
    tl2.fromTo('.header', { opacity: 0, y: -20 }, { opacity: 1, y: 0, delay: 0.5, ease: 'power1.inOut' }, '<');
    tl2.fromTo('.imgslide', { opacity: 0, x: 100 }, { opacity: 1, x: 0, delay: 0.5, ease: 'power1.inOut' }, '<');
    tl2.fromTo('.slideshowTitle', { opacity: 0, x: -20 }, { opacity: 1, x: 0, delay: 0.5, ease: 'power1.inOut' }, '<');
    tl2.fromTo('.slideshowSubTitle', { opacity: 0, x: -20 }, { opacity: 1, x: 0, delay: 0.5, ease: 'power1.inOut' }, '<');
    tl2.fromTo('.slideshowButton', { opacity: 0, x: -20 }, { opacity: 1, x: 0, delay: 0.5, ease: 'power1.inOut' }, '<');

    tl2.fromTo('.slideshowButtonIcon', { y: 0 }, { y: -2, yoyo: true, repeat: -1 }, '<');




    tl2.fromTo('.imgslide', { y: 0, rotation: '0deg', }, { y: -20, rotation: '-3deg', yoyo: true, ease: 'power1.inOut', repeat: -1, duration: 3, delay: 0.5 }, '<');



    //animation
    const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "Power1.easeOut" } });
    tl.fromTo('.cookie-container', { scale: 0 }, { scale: 1, ease: "elastic.out(1,0,.4", duration: 1.5, delay: 5 });
    tl.fromTo('.cookie', { opacity: 0, x: -50, rotation: '-45deg' }, { opacity: 1, x: 0, rotation: '0deg' }, '<50%');
    tl.fromTo('.cookie-title', { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '<');
    tl.fromTo('.cookie-subtitle', { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '<');
    tl.fromTo('.cookie-button', { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '<');

    //jumping cookie
    tl.fromTo('.cookie', { y: 0, rotation: '0deg' }, { y: -20, rotation: '-20deg', yoyo: true, ease: 'power1.inOut', repeat: -1 });

    //close cookie
    const cookieButton = this.elRef.nativeElement.querySelector('.cookie-button');
    this.renderer.listen(cookieButton, 'click', () => {
      gsap.to('.cookie-container', { opacity: 0, y: 100, duration: 0.75, ease: 'power1.out' });
    });


  }
}
