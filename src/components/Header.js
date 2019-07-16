import React from 'react';
import { Menu } from 'semantic-ui-react';

const headerStyles = {
  headerMenu: {
    margin: 'auto',
  },
};

const Header = () => (
  <div>
    <Menu attached='top' fluid >
      <Menu.Menu position='left'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            <input className='prompt' type='text' />
            <i className='search link icon' />
          </div>
          <div className='results' />
        </div>
      </Menu.Menu>
      <Menu.Menu style={headerStyles.headerMenu}>
        <Menu.Item name='Dashboard' />
        <Menu.Item name='Bills' />
        <Menu.Item name='Loyalty' />
        <Menu.Item name='Integrations' />
        <Menu.Item name='Analytics' />
        <Menu.Item name='Stores' />
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Menu.Item name='Starbucks'/>
        <Menu.Item position='right'>
          <img src='https://banner2.kisspng.com/20180131/elw/kisspng-coffee-starbucks-cafe-logo-food-starbucks-logo-png-file-5a724a65becfc8.2787887515174395897816.jpg' />
        </Menu.Item>
        <Menu.Item>
          <i class="bell icon"></i>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>
);

export default Header;
