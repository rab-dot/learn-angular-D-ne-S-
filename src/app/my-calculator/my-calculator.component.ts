import { Component } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  standalone: false,
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss',
})
export class MyCalculatorComponent {
  public first: number = 1;
  public second: number = 1;

  public opperation: string = '+';

  public opperations: string[] = ['+', '-', '*', '/'];

  public result: number | undefined = undefined;

  public calc() {
    switch (this.opperation) {
      case '+':
        this.result = this.first + this.second;
    }
  }
}
