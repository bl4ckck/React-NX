import { renderWrapper } from '@react-nx/bookstore/shared/utils-testing';
import { render } from '@testing-library/react';

import Layout from './bookstore-shared-layout';

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWrapper(
      <Layout children={<div>test</div>} />
    );
    expect(baseElement).toBeTruthy();
  });
});
