import { clusterApiUrl, PublicKey } from '@solana/web3.js'
import spotify from './spotify.json'

export const SOLANA_HOST = clusterApiUrl('devnet')

export const STABLE_POOL_PROGRAM_ID = new PublicKey(
  'Fgd9LxCwwMUuTtS8RSDujZfCBt58QnAhABSp85KRAZCv',
)

export const STABLE_POOL_IDL = spotify
