import App from '../App';

describe('App()', () => {
  it('should print hello world', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    App();

    expect(consoleSpy).toHaveBeenCalledWith('Hello world!');
  })
})
