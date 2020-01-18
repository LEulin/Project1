import { Component, OnInit } from '@angular/core';
import { Information } from '../information';

@Component({
  selector: 'app-parentform',
  templateUrl: './parentform.component.html',
  styleUrls: ['./parentform.component.css']
})
export class ParentformComponent implements OnInit {

  public information: Information;
  public firstname: string
  public lastname: string
  public emailni: string
  public gender: string
  public password: string
  public conpassword: string
  public storage: Information[] = [];
  public index: Number = 0;

  public editmeth: boolean = false;

  public parent = true;
  public child = false;

  public save: boolean = false;


  constructor() {
    this.information = new Information();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.child = true;
    // if(!edit){ ..code here.. }else{ for submission}
    // if (this.editmeth) {
    //   var index = this.index;
    //   this.storage[Number(index)].firstname = this.firstname;
    //   this.storage[Number(index)].lname = this.lastname;
    //   this.storage[Number(index)].gender = this.gender;
    //   this.storage[Number(index)].emailni = this.emailni;
    //   this.storage[Number(index)].password = this.password;
    //   this.storage[Number(index)].conpassword = this.conpassword;
    //   console.log(this.storage)
    // } else {}
      this.information = {
        firstname: this.firstname,
        lname: this.lastname,
        gender: this.gender,
        emailni: this.emailni,
        password: this.password,
        conpassword: this.conpassword
      }
      this.storage.push(this.information);
      console.log(this.index[0])
    

  }

  // informations(index: Number) {
  //   console.log("test" + " " + index);
  //   this.index = index;
  // }
  saveEdit(data) {
    this.save = true;

    // line of codes to save and pass data to child component 



    this.save = false;
  }

}
