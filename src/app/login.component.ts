import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "angular-web-storage";

@Component({
    selector:'app-root',
    templateUrl:'./login.component.html'
})
export class LoginComponent{
    name:any;
    pass:any;
    msg:any;
    constructor(private router:Router, private localStorage:LocalStorageService){
        let name=this.localStorage.get("userName");
        if(name!=null){
            this.router.navigateByUrl("/index");
        }
    }

    checkLogin(u,p){
        if(u=="a"&&p=="1"){
            this.localStorage.set("userName",u);
            this.router.navigateByUrl("/index");
        }
        else{
            this.msg="Login failed!";
        }
    }
}