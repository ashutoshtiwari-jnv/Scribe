import { Component, OnInit, } from '@angular/core';
import{FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm:FormGroup;
  message: string="";
  userError: any;

  constructor(public fb:FormBuilder,public authService:AuthService) 
  {
    this.myForm=this.fb.group(
      {firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confermPassword:['',[Validators.required,Validators.minLength(8)]]},{validator:this.checkIfMachingPasswords("password","confermPassword")});

  }

  checkIfMachingPasswords(passwordkey:string,confermPasswordkey:string)
  {
    return (group:FormGroup)=>
    {
      let password=group.controls[passwordkey];
      let confermPassword=group.controls[confermPasswordkey];
      if(password.value==confermPassword.value)
      {
        return ;
      }
      else{
        confermPassword.setErrors({notequaltopassword:true});
      }
    }
  }

  
  OnSubmit(signupform)
  {
    console.log(signupform.value);
    let email:string=signupform.value.email;
    let password:string =signupform.value.password;
    let firstName:string=signupform.value.firstName;
    let lastName:string=signupform.value.lastName;
    let Name:string =signupform.value.firstName+signupform.value.lastName;
    console.log(email," ",password," ",Name);
    let photo:string='';

    
    this.authService.signup(email,password,firstName,lastName).then(()=>
    {
      this.message="You have been signed up successfully!";}).catch((error)=>
    {
        console.log(error);
        this.userError=Error;
    });
  }
  






 ngOnInit(): void {}

  
}
