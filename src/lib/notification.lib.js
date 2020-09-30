import toast from "./toast.lib";

export default class NotificationService {
  static authenticationError() {
    toast.error('Please login!', 'Authentication')
  }
  static serverError() {
    toast.error("Sorry, There was some error!", 'Server');
  }
}