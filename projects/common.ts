import {getFullnodeUrl, SuiClient} from '@mysten/sui.js/client';

// const client = new SuiClient({ url: getFullnodeUrl('devnet') });
export const client = new SuiClient({url: getFullnodeUrl('mainnet')});

export interface NftFeed {
  Sender: string;
  ActionName: string;
  ImgUrl: string;
  NftName: string;
}