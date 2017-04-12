import { BelesAppPage } from './app.po';

describe('beles-app App', () => {
  let page: BelesAppPage;

  beforeEach(() => {
    page = new BelesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
