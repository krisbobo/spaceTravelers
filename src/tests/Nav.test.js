import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NavBar from '../components/Nav';

const mockStore = configureStore([]);

describe('Test snapshot component of Navbar', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      rockets: [
        {
          name: 'Rockets',
        },
      ],
    });
    component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>,
    );
  });
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
