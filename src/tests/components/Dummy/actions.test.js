import expect from 'expect'
import { dummyAction } from 'src/components/Dummy/actions'

describe('Actions', () => {
  it('Should generate dummy action', () => {
    var action = {
      type: 'DUMMY_ACTION'
    };
    var res = actions.dummyAction();
    expect(res).toEqual(action);
  });
});
