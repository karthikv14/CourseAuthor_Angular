import { CourseappPage } from './app.po';

describe('courseapp App', () => {
  let page: CourseappPage;

  beforeEach(() => {
    page = new CourseappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
