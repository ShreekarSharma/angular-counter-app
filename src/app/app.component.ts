import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Counter App';
  count:number = 0;
  handleIncrease = () => {
    this.count = this.count + 1;
  };
  handleDecrease = () => {
    if(this.count > 0){
      this.count = this.count - 1;
    } else{
      this.count = 0;
    }
  };
  handleReset = () => {
    this.count = 0;
  };
}
