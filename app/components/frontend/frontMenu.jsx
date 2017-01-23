import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;

export default class FrontMenu extends Component {

  constructor(props) {
    super(props);
    this.state = { current: 'mail' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={() => this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <MenuItem key="mail">
          Navigation One
        </MenuItem>
        <MenuItem key="app">
          Navigation Two
        </MenuItem>
        <SubMenu title={<span>Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <MenuItem key="setting:1">Option 1</MenuItem>
            <MenuItem key="setting:2">Option 2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <MenuItem key="setting:3">Option 3</MenuItem>
            <MenuItem key="setting:4">Option 4</MenuItem>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </MenuItem>
      </Menu>
    );
  }
}

