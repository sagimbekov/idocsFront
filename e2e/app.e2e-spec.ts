import { IdocsFrontPage } from './app.po';

describe('idocs-front App', function() {
  let page: IdocsFrontPage;

  beforeEach(() => {
    page = new IdocsFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
