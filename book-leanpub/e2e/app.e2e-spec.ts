import { BookLeanpubPage } from './app.po';

describe('book-leanpub App', () => {
  let page: BookLeanpubPage;

  beforeEach(() => {
    page = new BookLeanpubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
