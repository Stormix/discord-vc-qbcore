import { IConfig } from "../@types/config";

const Config: IConfig = JSON.parse(LoadResourceFile(GetCurrentResourceName(), 'config.json'));

export default Config;