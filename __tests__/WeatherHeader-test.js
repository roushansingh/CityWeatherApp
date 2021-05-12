/**
 * @format
 */

import 'react-native';
import React from 'react';
import WeatherHeader from '../src/weather/components/WeatherHeader';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Home snapShot', () => {
   const snap = renderer.create(<WeatherHeader />).toJSON();

   expect(snap).toMatchSnapshot()
});
