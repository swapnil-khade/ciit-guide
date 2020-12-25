import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "angular-web-storage";

@Component({
    selector:'app-root',
    templateUrl:'./index.component.html'
})
export class IndexComponent{
    
    constructor(private router:Router,private localStorage: LocalStorageService){
        let name=this.localStorage.get("userName");
        if(name=="" || name==null){
            this.router.navigateByUrl("");
        }

    }

}