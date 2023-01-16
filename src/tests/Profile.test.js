import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Profile from '../components/Profile';
import store from '../redux/configureStore';

describe('Test the react component of Profile', () => {
  it('Test react Profile page', () => {
    const myProfile = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(myProfile).toMatchSnapshot();
  });
});
