import { ParamsInstance } from '../config';

export class EventService {
  static GetEvents(): Promise<any> {
    const url = `${ParamsInstance.backendHost}/events`;
    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        APIKey: ParamsInstance.apiKey
      }
    });
  }

  static CreateEvent(title: string, description: string, startsAt: any, capacity: number): Promise<any> {
    const body = {
      title: title,
      description: description,
      startsAt: new Date(startsAt * 1000),
      capacity: capacity
    };
    return fetch(`${ParamsInstance.backendHost}/events`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        APIKey: ParamsInstance.apiKey,
        Authorization: '' + localStorage.getItem('token')
      },
      body: JSON.stringify(body)
    });
  }
}
