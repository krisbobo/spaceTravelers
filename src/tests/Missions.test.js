import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Mission from '../components/MissionProfile';

const mockStore = configureStore([]);

describe('My connected React-Redux component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      missions: [
        {
          mission_name: 'Thaicom',
        },
      ],
    });

    component = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
  });
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
