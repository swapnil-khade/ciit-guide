import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "angular-web-storage";

@Component({
    selector:'app-root',
    template:''
})
export class LogoutComponent{

    constructor(private router:Router,private localStorage:LocalStorageService){
        this.localStorage.remove("userName");
        this.router.navigateByUrl("");
    }
}