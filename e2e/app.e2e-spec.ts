import { Awesomenews4000Page } from './app.po';

describe('awesomenews4000 App', function() {
  let page: Awesomenews4000Page;

  beforeEach(() => {
    page = new Awesomenews4000Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
