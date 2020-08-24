import React from 'react';
import { mount } from 'enzyme';
import CheckoutItem from './checkout-item';

import { CartContext }  from '../../providers/cart/cart-provider';

describe('CheckoutItem component', () => {
    let wrapper;
    let mockClearItem;
    let mockAddItem;
    let mockRemoveItem;
  
    beforeEach(() => {
      mockClearItem = jest.fn();
      mockAddItem = jest.fn();
      mockRemoveItem = jest.fn();
  
      const mockProps = {
        item: {
          imageUrl: 'www.testImage.com',
          price: 10,
          name: 'hats',
          quantity: 2
        }
      };
  
      wrapper = mount(
          <CartContext.Provider value={{
              clear:mockClearItem,
              addItem: mockAddItem,
              removeItem: mockRemoveItem
          }}>
              <CheckoutItem {...mockProps} />
          </CartContext.Provider>
      );
    });
  
    it('should render CheckoutItem component', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should call clearItem when remove button is clicked', () => {
      wrapper.find('.remove').simulate('click');
      expect(mockClearItem).toHaveBeenCalled();
    });
  
    it('should call removeItem when left arrow is clicked', () => {
      wrapper.find('.quantity').childAt(0).simulate('click');
      expect(mockRemoveItem).toHaveBeenCalled();
    });
  
    it('should call addItem when right arrow is clicked', () => {
      wrapper.find('.quantity').childAt(2).simulate('click');
      expect(mockAddItem).toHaveBeenCalled();
    });
  });
