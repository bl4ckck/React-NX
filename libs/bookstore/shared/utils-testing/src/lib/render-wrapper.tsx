import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export function renderWrapper(element: React.ReactElement) {
  const routerWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
  };

  return render(element, { wrapper: routerWrapper });
}

export default renderWrapper;
