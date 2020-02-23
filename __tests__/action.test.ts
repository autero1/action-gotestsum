import * as os from 'os';
import {getDownloadURL} from '../src/action';
import got from 'got';

jest.mock('os');

async function checkHead(url: string): Promise<number> {
  // Due to funky redirects with GitHub, just making sure we get the 302 found and not follow
  const response = await got.get(url, {followRedirect: false});
  return response.statusCode;
}

describe('getDownloadURL()', () => {
  test('get windows url', async () => {
    const spy = jest.spyOn(os, 'type');
    spy.mockReturnValue('Windows_NT');
    const winDLUrl = getDownloadURL('v0.4.1');
    expect(winDLUrl).toBe(
      'https://github.com/gotestyourself/gotestsum/releases/download/v0.4.1/gotestsum_0.4.1_windows_amd64.tar.gz'
    );
    expect(await checkHead(winDLUrl)).toEqual(302);
  });

  test('get darwin url', async () => {
    const spy = jest.spyOn(os, 'type');
    spy.mockReturnValue('Darwin');
    const darwinDLUrl = getDownloadURL('v0.4.1');
    expect(darwinDLUrl).toBe(
      'https://github.com/gotestyourself/gotestsum/releases/download/v0.4.1/gotestsum_0.4.1_darwin_amd64.tar.gz'
    );
    expect(await checkHead(darwinDLUrl)).toEqual(302);
  });

  test('get linux url', async () => {
    const spy = jest.spyOn(os, 'type');
    spy.mockReturnValue('Linux');
    const linuxDLUrl = getDownloadURL('v0.4.1');
    expect(linuxDLUrl).toBe(
      'https://github.com/gotestyourself/gotestsum/releases/download/v0.4.1/gotestsum_0.4.1_linux_amd64.tar.gz'
    );
    expect(await checkHead(linuxDLUrl)).toEqual(302);
  });
});
