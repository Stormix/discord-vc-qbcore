import Config from '../../config.json';
import { IConfig } from '../@types/config';
import { QBCore } from './qbcore';
import { Delay } from './utils';

let DefaultConfig: IConfig = Config; // Callback takes time without this first few ticks will get undefined error

setImmediate(() => {
  console.log('Starting discord vc check client');
  QBCore.Functions.TriggerCallback('discord-vc-check:server:GetConfig', (cb: IConfig) => {
    DefaultConfig = cb;
  });

  console.log(DefaultConfig);
});

setTick(() => {
  Delay(1);
});
