import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dragons from '../components/Dragons';
import store from '../redux/configureStore';

describe('Test the react component of Profile', () => {
  it('Test react Profile page', () => {
    const dragons = render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    expect(dragons).toMatchSnapshot();
  });
});
