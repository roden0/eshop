import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item';

describe('Cart item component', () => {
    it('renders list element', ()=>{
        const mockProps = {
            item: {
                imageUrl: "",
                price: 10,
                name: "",
                quantity: 1
            }
        };
        const wrapper = shallow(<CartItem {...mockProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});