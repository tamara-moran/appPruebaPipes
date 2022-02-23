import { Component } from '@angular/core';

// Usage of wordcount pipe within interpolation
@Component({
selector: 'app-root',
template: `
        <div style="text-align:center">
        <h2>{{customText}}</h2>
          <h1>{{ customText | wordcount }}</h1>
        </div>
`
})
export class AppComponent {
   customText: string = "Java is to JavaScript what car is to Carpet.";
}