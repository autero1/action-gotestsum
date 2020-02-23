import * as core from '@actions/core';
import {Inputs, Outputs} from './interfaces';

function showInputs(inps: Inputs): void {
  core.info(`[INFO] GotestsumVersion: ${inps.GotestsumVersion}`);
}

export function getInputs(): Inputs {
  let gtsVersion = core.getInput('gotestsum_version');
  if (!gtsVersion.startsWith('v')) {
    gtsVersion = `v${gtsVersion}`;
  }
  const inps: Inputs = {
    GotestsumVersion: gtsVersion
  };

  showInputs(inps);

  return inps;
}

export function getOutputs(): Outputs {
  const outs: Outputs = {
    GotestsumPath: 'gotestsum_path'
  };

  return outs;
}
