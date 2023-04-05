import React , {useMemo} from "react";
import { ConnectionProvider , WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-wallets"
 


const WalletConnectionProvider = () => {
    return (<div>WalletConnectionProvider</div>  );
}
 
export default WalletConnectionProvider;