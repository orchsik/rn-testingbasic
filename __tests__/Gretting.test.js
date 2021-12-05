import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Greeting from '../src/Greeting';

describe('[Greeting] Test', () => {
  const onPressMock = jest.fn();
  const props = {
    title: 'Hello!',
    onPress: onPressMock,
  };

  test('버튼이 5번 눌린다.', () => {
    const rendered = render(<Greeting {...props} />);
    for (let i = 0; i < 5; i++) {
      fireEvent(rendered.getByText('Hello!'), 'onPress');
    }
    expect(onPressMock).toBeCalledTimes(5);
  });

  test('버튼이 이름이 Hello! 이다.', () => {
    const rendered = render(<Greeting {...props} />);
    fireEvent(rendered.getByText('Hello!'), 'onPress');
    expect(rendered.toJSON().children[0].children[0].children[0]).toEqual(
      'Hello!',
    );
  });
});

/**
 * jest.fn()은 mocking하는 목적으로 사용되었는데,
 * 우리가 실제로 함수를 사용할 수 도 있지만 실제 함수를 호출하기 어려운 상황이거나
 * 꼭 그럴 필요가 없을 때 '이 함수가 있겠다~' 하고만들어 두는 가짜 함수라고 볼 수 있다.
 *
 * fireEvent는 onPress, onChange, scroll 같이 어떤 이벤트로써 상호작용하는 컴포넌트를 트리거하는데 사용된다.
 *
 */
