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

  static AttentEvent(id: string): Promise<any> {
    const url = `${ParamsInstance.backendHost}/events/${id}/attendees/me`;
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        APIKey: ParamsInstance.apiKey,
        Authorization: '' + localStorage.getItem('token')
      }
    });
  }

  static LeaveEvent(id: string): Promise<any> {
    const url = `${ParamsInstance.backendHost}/events/${id}/attendees/me`;
    return fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        APIKey: ParamsInstance.apiKey,
        Authorization: '' + localStorage.getItem('token')
      }
    });
  }

  static DeleteEvent(id: string): Promise<any> {
    const url = `${ParamsInstance.backendHost}/events/${id}`;
    return fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        APIKey: ParamsInstance.apiKey,
        Authorization: '' + localStorage.getItem('token')
      }
    });
  }

  static GetEventDetail(id: string): Promise<any> {
    const url = `${ParamsInstance.backendHost}/events/${id}`;
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
      startsAt: startsAt,
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

  static EditEvent(title: string, description: string, startsAt: any, capacity: number, id: string): Promise<any> {
    const body = {
      title: title,
      description: description,
      startsAt: startsAt,
      capacity: capacity
    };
    return fetch(`${ParamsInstance.backendHost}/events/${id}`, {
      method: 'PATCH',
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
