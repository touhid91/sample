import { BypassSanityPipe } from './bypass-sanity.pipe';

describe('BypassSanityPipe', () => {
  it('create an instance', () => {
    const pipe = new BypassSanityPipe();
    expect(pipe).toBeTruthy();
  });
});
