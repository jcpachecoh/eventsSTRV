export const appLabels = {
  emailLabel: 'Email',
  passwordLabel: 'Password',
  passwordRepeatLabel: 'Repeat Password',
  firstName: 'First name',
  lastName: 'Last Name',
  title: 'Title',
  description: 'Description',
  date: 'Date',
  time: 'Time',
  capacity: 'Capacity',
};

export const errorsForm = {
  title: 'Title has to be filled up',
  description: 'Description has to be filled up',
  date: 'Date has to be filled up',
  time: 'Time has to be filled up',
  capacity: 'Capacity has to be filled up',
  commonField: 'This field has to have more than 6 characters to be valid',
  email: 'Please write a valid email',
  passwordValidation: 'Please write a stronger password to continue'
};

export const messages = {
  logInFails: 'Oops! That email and password combination is not valid',
  completeForm: 'Please, complete the form to continue',
  invalidEmail: 'Invalid email please verify your information',
  passwordError: 'Passwords dont matched, please verify your information'
};

export const formatDateString = 'MMMM Do YYYY, h:mm:ss a';

export const titles = {
  indexTitle: `Great, Kid. Don't get cocky.`,
  eventsHeader: {
    all: 'ALL EVENTS',
    past: 'PAST EVENTS',
    future: 'FUTURE EVENTS',
    detail: 'DETAIL EVENT'
  },
  profileHeader: {
    myEvents: 'My Events'
  }
};

export const method = {
  post: 'POST',
  get: 'GET',
  put: 'PUT',
  delete: 'DELETE'
};

export const mockUser = {
  user: {
    _id: '599aa9637537810022cbc475',
    candidateId: '599aa9637537810022cbc474',
    firstName: 'Bruce',
    lastName: 'Banner',
    email: 'brucebanner@strv.com',
    __v: 0,
    id: '599aa9637537810022cbc475'
  },
  iat: 1535034861,
  exp: 1535038461,
  iss: 'com.strv.testproject-api.production'
};

export const mockEvents: any = {
  id: '58493db9691ecc0d3da51bfd',
  title: 'Awesome event',
  description: 'A bunch of people doing awesome stuff',
  startsAt: '2016-12-08T10:46:33.901Z',
  capacity: 50,
  owner: {
    id: '58493e0b691ecc0d3da51bfe',
    firstName: 'Robert',
    lastName: 'Rossmann',
    email: 'robert.rossmann@strv.com',
    createdAt: '2016-12-08T10:46:33.901Z',
    updatedAt: '2016-12-08T10:46:33.901Z'
  },
  attendees: [
    {
      id: '58493e0b691ecc0d3da51bfe',
      firstName: 'Robert',
      lastName: 'Rossmann',
      email: 'robert.rossmann@strv.com',
      createdAt: '2016-12-08T10:46:33.901Z',
      updatedAt: '2016-12-08T10:46:33.901Z'
    }
  ],
  createdAt: '2016-12-08T10:46:33.901Z',
  updatedAt: '2016-12-08T10:46:33.901Z'
};

export const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
