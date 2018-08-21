import { ParamsInstance } from '../config';

export class UserService {
  static ValidAuth(email: string, password: string): Promise<any> {
    const url = `${ParamsInstance.backendHost}/auth/native/`,
      query = {
        email: email,
        password: password
      };
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        APIKey: ParamsInstance.apiKey
      },
      body: JSON.stringify(query)
    });
  }
  // static RefreshToken()
  static CreateUser(email: string, password: string, firstName: string, lastName: string): Promise<any> {
    const url = `${ParamsInstance.backendHost}/users/`,
      query = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      };
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        APIKey: ParamsInstance.apiKey
      },
      body: JSON.stringify(query)
    });
  }
}
