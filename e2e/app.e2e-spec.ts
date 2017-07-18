import { AlgosNgularPage } from './app.po';

describe('algos-ngular App', () => {
  let page: AlgosNgularPage;

  beforeEach(() => {
    page = new AlgosNgularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
