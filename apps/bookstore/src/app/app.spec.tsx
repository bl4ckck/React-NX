import { renderWrapper } from '@react-nx/bookstore/shared/utils-testing';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWrapper(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = renderWrapper(<App />);

    expect(getByText(/Welcome to Home!/gi)).toBeTruthy();
  });
});
