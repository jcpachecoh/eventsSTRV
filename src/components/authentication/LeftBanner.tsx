import * as React from 'react';
import { titles } from '../../constants';

export class LeftBanner extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="left-banner">
        <div className="logo">E.</div>
        <div className="left-banner-footer">
          <h1>"{titles.indexTitle}"</h1>
          <hr />
          <h3>Han Solo</h3>
        </div>
      </div>
    );
  }
}
