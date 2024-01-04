import { UsdToNrsPipe } from './usd-to-nrs.pipe';

describe('UsdToNrsPipe', () => {
  it('create an instance', () => {
    const pipe = new UsdToNrsPipe();
    expect(pipe).toBeTruthy();
  });
});
