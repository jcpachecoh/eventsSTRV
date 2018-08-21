import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store-index';
import { ConnectedRoot } from './root';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store-index';
import './css/main.css';
import * as WebFont from 'webfontloader';

WebFont.load({
  custom: {
    families: [
      'Hind-Bold',
      'Hind-Light',
      'Hind-Medium',
      'Hind-Regular',
      'Hind-SemiBold',
      'PlayfairDisplay-Black',
      'PlayfairDisplay-BlackItalic',
      'PlayfairDisplay-Bold',
      'PlayfairDisplay-BoldItalic',
      'PlayfairDisplay-Italic',
      'PlayfairDisplay-Regular'
    ],
    urls: [
      './css/Fonts/Hind/Hind-Bold.ttf',
      './css/Fonts/Hind/Hind-Light.ttf',
      './css/Fonts/Hind/Hind-Medium.ttf',
      './css/Fonts/Hind/Hind-Regular.ttf',
      './css/Fonts/Hind/Hind-SemiBold.ttf',
      './css/Fonts/Playfair_Display/PlayfairDisplay-Black.ttf',
      './css/Fonts/Playfair_Display/PlayfairDisplay-BlackItalic.ttf',
      './css/Fonts/Playfair_Display/PlayfairDisplay-Bold.ttf',
      './css/Fonts/Playfair_Display/PlayfairDisplay-BoldItalic.ttf',
      './css/Fonts/Playfair_Display/PlayfairDisplay-Italic.ttf',
      './css/Fonts/Playfair_Display/PlayfairDisplay-Regular.ttf'
    ]
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConnectedRoot />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
