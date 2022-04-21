import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  let button0;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let add;
  let subtract;
  let multiply;
  let divide;
  let decimal;
  let clear;
  let equals;
  let runningTotal;

  beforeEach(() => {
    container = mount(<Calculator/>)
    button0 = container.find('#number0');
    button1 = container.find('#number1');
    button2 = container.find('#number2');
    button3 = container.find('#number3');
    button4 = container.find('#number4');
    button5 = container.find('#number5');
    button6 = container.find('#number6');
    button7 = container.find('#number7');
    button8 = container.find('#number8');
    button9 = container.find('#number9');
    add = container.find('#operator_add');
    subtract = container.find('#operator-subtract');
    multiply = container.find('#operator-multiply');
    divide = container.find('#operator-divide');
    equals = container.find('#operator-equals');
    decimal = container.find('#decimal');
    clear = container.find('#clear');
    runningTotal = container.find('#running-total');
  })

  it('should change running total on number enter', () => {
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    button1.simulate('click');
    add.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    button7.simulate('click');
    subtract.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    button2.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    button1.simulate('click');
    button2.simulate('click');
    button3.simulate('click');
    expect(runningTotal.text()).toEqual('123');
  })

  it('should chain multiple operations together', () => {
    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    add.simulate('click');
    button6.simulate('click');
    divide.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should clear the running total without affecting the calculation', () => {
    button9.simulate('click');
    button0.simulate('click');
    button0.simulate('click');
    subtract.simulate('click');
    button8.simulate('click');
    button0.simulate('click');
    button0.simulate('click');
    clear.simulate('click');
    add.simulate('click');
    button1.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('901');
  })
})

