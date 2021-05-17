import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  receiver_name: string = '';
  sender_name: string = '';
  sender_designation: string = '';
  keywords: string = '';
  subject: string = '';
  emailtry: any;
  constructor(private service: ServiceService, private httpClient: HttpClient) { }
  email: string = ''
  fetchvalue() {
    var str: string = ''
    str = "Create email with;receiver:" + this.receiver_name + ";sender:" + this.sender_name + ";" + this.keywords;
    this.service.getProducts(str).subscribe((resp: any) => {
      this.email = resp;
      console.log(this.email);
    });
  }


  sayHi() {
    var str: string = ''

    str = "Create email with;receiver:" + this.receiver_name + ";sender:" + this.sender_name + ";" + this.subject + this.keywords;
    console.log(str);
    this.httpClient.get('http://19a245513a78.ngrok.io?em=' + str).subscribe(data => {
      this.emailtry = data;
      console.log(this.emailtry);
      this.display();
    })
  }

  disp: boolean = false;
  display() {
    document.getElementById('email').innerHTML = "<pre>" + this.emailtry.toString();
  }
}
