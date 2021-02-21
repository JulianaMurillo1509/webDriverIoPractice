import locatorsPage from '../pageobjects/locators.page';
import LocatorsPage from '../pageobjects/locators.page';

function emailF() {
   var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
   var string = '';
 for(var ii=0; ii<15; ii++){
   string += chars[Math.floor(Math.random() * chars.length)];
  }
  return (string+'@mailto.com');
};
describe('Buying a product', () => {
   it('Should open the main url and verify the title', () => {
      LocatorsPage.open();
      expect(browser).toHaveTitle('My Store');
   });

   it('Should redirect to login page', () => {
      locatorsPage.signIn.click();
      expect(browser).toHaveTitle('Login - My Store');
   });
   it('Should proceed to register form', () => {
      locatorsPage.emailInput.addValue(emailF());
      locatorsPage.createacctbtn.click();
   });
   it('Should complete the form and register', () => {
      LocatorsPage.title.click();
      LocatorsPage.firstName.addValue('Homer');
      LocatorsPage.lastName.addValue('Simpson');
      LocatorsPage.password.addValue('passwd');
      LocatorsPage.address.addValue('742 Evergreen Terrace');
      LocatorsPage.city.addValue('Springfield');
      LocatorsPage.state.click();
      LocatorsPage.stateOption.click();
      LocatorsPage.zip.addValue('32003');
      LocatorsPage.homePhone.addValue('(555) 555-1234');
      LocatorsPage.registerBtn.click();

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
   it('Should be on address Tab and checkout', () => {
      LocatorsPage.checkAdressBtn.click();
   });
   it('Should Accept terms and checkout', () => {
      LocatorsPage.terms.click();
      LocatorsPage.checkShippingBtn.click();
   });
   it('Should select bank wire and validate information', () => {
      LocatorsPage.paymentBtn.click();
      expect(LocatorsPage.finalInfo).toHaveText('BANK-WIRE PAYMENT.')
   });
});