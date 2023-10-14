import $api from "../http";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(username, password) {
    return $api.post;
  }
}
