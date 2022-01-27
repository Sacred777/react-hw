/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow } from "enzyme";
import { Dropdown } from "../Dropdown";

describe('Dropdown', () => {  // пишем что объединенный тест для к-та Dropdown
  test('should render', () => {  // название теста - "должен быть отрендерен"
    const wrapper = shallow(<Dropdown children={<div/>} button={<button/>}/>);
    expect(wrapper).toBeDefined(); // проверяем что К отрендерился
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy(); // проверяем есть ли 'div.container' - контейнер кнопки и проверяем пустой ли он.
  })

  test('should render (snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div/>} button={<button/>}/>); // рендерим в переменную компонент

    expect(wrapper).toMatchSnapshot() //
  })
})
