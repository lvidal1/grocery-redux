import { GroceryReduxPage } from './app.po';

describe('grocery-redux App', () => {
  let page: GroceryReduxPage;

  beforeEach(() => {
    page = new GroceryReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
