import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import store from '../redux/configureStore';

describe('Test the react component of Profile', () => {
  it('Test react Profile page', () => {
    const rockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });
});
