import { ComponentRouter } from './fixtures/component-router';
import { renderWrapper } from './render-wrapper';

describe('BookstoreSharedUtilsTesting', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWrapper(<ComponentRouter />);
    expect(baseElement).toBeTruthy();
  });
});
