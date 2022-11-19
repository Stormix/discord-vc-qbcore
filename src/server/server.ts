import { QBCore } from './qbcore';
import DefaultConfig from '../../config.json';

on('onResourceStart', (name: string) => {
  if (name == GetCurrentResourceName()) {
    setTimeout(() => {
      console.log(`^3 Starting discord vc check ^0`);
    }, 500);
  }
});

QBCore.Functions.CreateCallback('discord-vc-check:server:GetConfig', (source, cb) => {
  cb(DefaultConfig);
});
