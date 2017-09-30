import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');
  expect(toJson(checkbox)).toMatchSnapshot();

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});

it('changes the label when click', () => {
  const wrapper = shallow(
    <CheckboxWithLabel labelOn="オン" labelOff="オフ" />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
  // onClick
  wrapper.find('input').simulate('change');
  expect(toJson(wrapper)).toMatchSnapshot();

})
