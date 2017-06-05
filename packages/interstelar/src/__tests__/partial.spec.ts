import { partial } from '../index';

describe('partial', () => {
  it('should return the same function every time', () => {
    function identity(param: any): any {
      return param;
    }

    const callback1 = partial(identity, 'Test');
    const callback2 = partial(identity, 'Test');

    expect(callback1).toEqual(callback2);

    const callback3 = partial(identity, 'Another Test');
    const callback4 = partial(identity, 'Another Test');

    expect(callback3).not.toEqual(callback1);
    expect(callback3).toEqual(callback4);
  });
});
