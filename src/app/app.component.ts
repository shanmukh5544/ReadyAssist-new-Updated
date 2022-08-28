import { DOCUMENT } from '@angular/common';
import { Component, Inject} from '@angular/core';
import { fromEvent } from 'rxjs';
import {throttleTime} from 'rxjs/operators';

declare var AOS:any;
// declare var chat:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ReadyassistNew';

  

  constructor(@Inject(DOCUMENT) private _document:Document){

  }
  

  ngOnInit():void{



    

    fromEvent(window,"scroll").pipe(throttleTime(20)).subscribe((event)=>{  



      let intViewportWidth = this._document.defaultView.window.innerWidth;

      const element = window.document.getElementById("navbar");

	if (
    
		this._document.body.scrollTop > 30 ||  (this._document.documentElement.scrollTop > 30) && (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if (
		this._document.body.scrollTop < 30 ||  (document.documentElement.scrollTop < 30) && (intViewportWidth > 991)
	) {
		this._document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
    });
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
    });

    (function(d, m){
      var kommunicateSettings = 
          {"appId":"2591ba4d5390bdb382b2e8e003f34aabf","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (window as any).kommunicate = m; m._globals = kommunicateSettings;
  })(document, (window as any).kommunicate || {});
}
  
  


}




	