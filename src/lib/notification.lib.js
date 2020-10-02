import toast from "./toast.lib";

export default class NotificationService {
  static authenticationError() {
    toast.error("Please login!", "Authentication");
  }
  static serverError() {
    toast.error("Sorry, There was some error!", "Server");
  }
  static notFound() {
    toast.error("Sorry, Record not found!", "Server");
  }
  static alreadyLoggin() {
    toast.success("You are already logged in!", "Login");
  }
  static invalidAccount() {
    toast.error("Email/password invalid!", "Login");
  }
  static succesLogin() {
    toast.success("You are logged in!", "Login");
  }
  static succesLogout(){
    toast.success("You are logged out!", "Login")
  }
}
