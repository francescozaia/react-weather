import React from 'react';
import { render } from 'react-dom';
import WeatherWidget from './components/WeatherWidget';

render(
    <WeatherWidget initialAddress="Taglio di Po, Rovigo" />,
    document.getElementById('container')
);
