import LocatorsPage from '../pageobjects/locators.page';


describe('Buying a product', () => {
   it('Should open the main url and verify the title', () => {
      LocatorsPage.open();
      expect(browser).toHaveTitle('My Store');
   });

   it('Should find a product and order by price', () => {
      LocatorsPage.searchInput.addValue('Dress');
      LocatorsPage.searchBtn.click();
      LocatorsPage.sortBy.click();
      LocatorsPage.sortByOption.click();
      expect(LocatorsPage.searchInput).toHaveValue('Dress');
      expect(LocatorsPage.price).toHaveText('$16.51');
   }); 
   it('Should add the product to the shopping cart', () => {
      LocatorsPage.addtoCartBtn.click();
      expect(LocatorsPage.banner).toBeDisplayed();
   });
   it('Should Proceed to checkout', () => {
      LocatorsPage.checkoutBtn.click();
      expect(browser).toHaveTitle('Order - My Store');
      LocatorsPage.checkBtn.click();
   });
   it('Should redirect to login page', () => {
      expect(browser).toHaveTitle('Login - My Store');
   });
});