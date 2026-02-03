import { AltCasePipe } from './alt-case.pipe';

describe('AltCasePipe', () => {
  it('create an instance', () => {
    const pipe = new AltCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform string to alternating case starting with lower case', () => {
    const pipe = new AltCasePipe();
    const input = 'Hello World!';
    const expectedOutput = 'hElLo wOrLd!';
    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('should return empty string for null or undefined input', () => {
    const pipe = new AltCasePipe();
    expect(pipe.transform(null as unknown as string)).toBe('');
    expect(pipe.transform(undefined as unknown as string)).toBe('');
  });
});
