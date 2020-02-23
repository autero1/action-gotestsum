import {Inputs, Outputs} from '../src/interfaces';
import {getInputs, getOutputs} from '../src/get-inputs-and-outputs';

beforeEach(() => {
  jest.resetModules();
});

afterEach(() => {
  delete process.env['INPUT_GOTESTSUM_VERSION'];
});

describe('getInputs()', () => {
  test('get spec inputs', () => {
    process.env['INPUT_GOTESTSUM_VERSION'] = 'v0.4.1';

    const inputs: Inputs = getInputs();

    expect(inputs.GotestsumVersion).toMatch('v0.4.1');
  });

  test('get spec input prefixes with v', () => {
    process.env['INPUT_GOTESTSUM_VERSION'] = '0.4.1';

    const inputs: Inputs = getInputs();

    expect(inputs.GotestsumVersion).toMatch('v0.4.1');
  });

  test('get spec outputs', () => {
    const outputs: Outputs = getOutputs();

    expect(outputs.GotestsumPath).toMatch('gotestsum_path');
  });
});
