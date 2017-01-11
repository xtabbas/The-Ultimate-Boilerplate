import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';


function setup() {
  const props = {
    openModal: () => { 'MODAL', {}; }
  };

  return shallow(<Message {...props} />);
}

describe('Message component', () => {
  it('should renders 4 divs, h1 and a button', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(4);
    expect(wrapper.find('h1').text()).toEqual('The Ultimate Boilerplate');
    expect(wrapper.find('button').text()).toEqual('Click me to open Modal using Redux state');
  });
});
