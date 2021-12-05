import React from 'react';
import Profile from '../src/Profile';
import {fireEvent, render} from '@testing-library/react-native';

describe('[Profile Test', () => {
  const props = {
    userName: '액션가면',
    name: '짱구',
  };

  test('유저이름이 알맞게 나온다.', () => {
    const rendered = render(<Profile {...props} />);
    rendered.getByText(/액션가면/);
  });

  test('버튼이 눌리면 메시지가 적절히 변경된다.', () => {
    const rendered = render(<Profile {...props} />);
    // rednered.debug()
    // rendered.getByText('Select your status');
    const byeBtn = rendered.getByText('Bye!');
    fireEvent(byeBtn, 'onPress');
    rendered.getByText('잘가!');

    const helloBtn = rendered.getByText('Hello!');
    fireEvent(helloBtn, 'onPress');
    rendered.getByText('컴온!');
  });
});
