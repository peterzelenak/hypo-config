import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getUser() {
    console.warn('fff');
    return this.http.get("/assets/user.json");
  }
}
