import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Advice {
  private http = inject(HttpClient);
  private readonly apiUrl = 'https://api.adviceslip.com/advice';
  
  getAdvice() {
    return this.http.get<AdviceSlip>(this.apiUrl);
  }
}
