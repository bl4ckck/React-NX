import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export function renderWrapper(element: React.ReactElement) {
  return render(element, { wrapper: BrowserRouter });
}

export default renderWrapper;
