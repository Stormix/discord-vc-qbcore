import { ClientUtils } from '@project-error/pe-utils';

class Utils extends ClientUtils {
  private Wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

  SendUIMessage = <T>(action: string, data: T) => {
    SendNUIMessage({
      action: action,
      data: data,
    });
  };
}

export const utils = new Utils();

export const Delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
