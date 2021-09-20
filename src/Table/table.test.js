import React from 'react';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Table from './Table';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// ADD more tests
// <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"></table> 
// <table border="0" cellpadding="0" cellspacing="0" style="cellpadding:0;cellspacing:0;color:#000000;font-family:Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;"
//                                           width="100%"></table> 
// <table cellpadding="0" cellspacing="0" class="show-for-large">
// <table cellpadding="0" cellspacing="0" class="header-top-padding" style="border-radius: 8px 8px 0 0; background: #ffffff; width: 100%"> 


describe('testing <Table> component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('html');
    ReactDOM.render(<Table />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders correctly', () => {
    const tree = create(<Table align='center' className='table'><h1>Table text</h1></Table>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('has table', () => {
    const elem = shallow(<Table />);
    const table = elem.find('table')
    expect(table).toHaveLength(1);
  });

  test('compoents children element should contain correct element', () => {
    const component = shallow(<Table><h1>Hi there</h1></Table>);
    const header = component.find('h1');

    expect(header).toHaveLength(1);
    expect(header.text()).toBe('Hi there');
  });
});


