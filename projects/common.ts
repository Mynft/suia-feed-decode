import {getFullnodeUrl, SuiClient} from '@mysten/sui.js/client';

export const TestClient = new SuiClient({url: getFullnodeUrl('devnet')});
export const MainClient = new SuiClient({url: getFullnodeUrl('mainnet')});

export interface NftFeed {
  Sender: string;
  ActionName: string;
  ImgUrl: string;
  NftName: string;
}