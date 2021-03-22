import { BehaviorSubject } from "rxjs";

export class AuthService {
  static loggedIn = new BehaviorSubject(false)
}
