import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  dataList: any = [];

  formName: string = '';
  formEmail: string = '';

  constructor(private ds: DataService) {
    this.getData();
  }

  getData() {
    this.ds.getDataFromServer().subscribe((response: any) => {
      this.dataList = response;
    });
  }

  handleSubmit() {
    let data = { name: this.formName, email: this.formEmail };

    this.ds.submitDataToServer(data).subscribe((response: any) => {
      alert('added');
      this.formName = '';
      this.formEmail = '';
      this.getData();
    });
  }

  deleteUser(id: any) {
    let data = { id: id };

    this.ds.deleteDataFromServer(data).subscribe((response: any) => {
      alert('deleted');
      this.getData();
    });
  }
}
