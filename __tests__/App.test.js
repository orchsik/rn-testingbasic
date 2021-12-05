import React from 'react';
import {render} from '@testing-library/react-native';

import App from '../App';

describe('[App] render', () => {
  const props = {userName: '액션가면', name: '짱구'};
  const rendered = render(<App {...props} />);

  test('renders correctly', () => {
    expect(rendered).toMatchSnapshot(); // 기존스냅샷과 일치하는지.
    expect(rendered).toBeTruthy(); // 컴포넌트가 null, undefined와 같은 falsy한 값을 가지는지
  });

  // test('should have default userName', () => {
  //   const rendered = render(<App />);
  // });
});

/**
 * App.js 컴포넌트를 불러와서 우리가 의도한 props를 주입하여 스냅샷을 비교하는 테스트.
 * 스냅샷 테스팅은 UI가 예측 못 하게 바뀌는걸 방지하도록할 때 유용한 툴.
 */
