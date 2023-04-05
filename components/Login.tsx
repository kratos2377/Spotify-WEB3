import React from "react";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const styles ={
    loginPage: `w-screen h-screen bg-white fles justify-center flex-col items-center`,
    text: `text-4xl text-black mb-10`
}

const Login = () => {
    return ( 
         <div className={styles.loginPage}>
            <p className={styles.text}>
            Login
            </p>
            </div>
         
         );
}
 
export default Login;