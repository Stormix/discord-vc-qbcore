import { QBCore } from './qbcore';

on('onResourceStart', (name: string) => {
  if (name == GetCurrentResourceName()) {
    setTimeout(() => {
      console.log(`^3 Starting discord vc check ^0`);
    }, 500);
  }
});
