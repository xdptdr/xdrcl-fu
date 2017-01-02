import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Button } from 'xdrcl';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>XDRCL Button</Button>
  ))
  .add('stock button', () => (
    <button onClick={action('clicked')}>Stock Button</button>
  ));
