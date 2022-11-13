import React, { Component, useState, useEffect } from 'react';
import {Grid} from '@mui/material';
import './menubar.css'



function MenuBar() {
    // function handleLoadScript() {
    //     import('./gettronwallet.js')
    //       .then(({ functionFromModule }) => {
    //         // Use functionFromModule 
    //       })
    //       .catch(err => {
    //         // Handle failure
    //       });
    //   };

    useEffect(() => {
        const interval = setInterval(async () => {
          getWalletDetails();
          //wallet checking interval 2sec
        }, 2000);
        return () => {
          clearInterval(interval);
        };
      });
    
    const [myMessage, setMyMessage] = useState(<h3> LOADING.. </h3>);
      const [myDetails, setMyDetails] = useState({
        name: 'none',
        address: 'none',
        balance: 0,
        frozenBalance: 0,
        network: 'none',
        link: 'false',
      });
    
      const getBalance = async () => {
        //if wallet installed and logged, getting TRX token balance
        if (window.tronWeb && window.tronWeb.ready) {
          let walletBalances = await window.tronWeb.trx.getAccount(
            window.tronWeb.defaultAddress.base58
          );
          return walletBalances;
        } else {
          return 0;
        }
      };
    
      const getWalletDetails = async () => {
        if (window.tronWeb) {
          //checking if wallet injected
          if (window.tronWeb.ready) {
            let tempBalance = await getBalance();
            let tempFrozenBalance = 0;
    
            if (!tempBalance.balance) {
              tempBalance.balance = 0;
            }
    
    
            //we have wallet and we are logged in
            setMyMessage(<h3>WALLET CONNECTED</h3>);
            setMyDetails({
              name: window.tronWeb.defaultAddress.name,
              address: window.tronWeb.defaultAddress.base58,
              balance: tempBalance.balance / 1000000,
              frozenBalance: tempFrozenBalance / 1000000,
              network: window.tronWeb.fullNode.host,
              link: 'true',
            });
          } else {
            //we have wallet but not logged in
            setMyMessage(<h3>WALLET DETECTED PLEASE LOGIN</h3>);
            setMyDetails({
              name: 'none',
              address: 'none',
              balance: 0,
              frozenBalance: 0,
              network: 'none',
              link: 'false',
            });
          }
        } else {
          //wallet is not detected at all
          setMyMessage(<h3>WALLET NOT DETECTED</h3>);
        }
      };
      
    return (
        <nav className="header">
            <div className="nav-wrapper">
              <Grid container direction='row' width='100vw'>
                <Grid item xs={2}>
                  <a className="logo" href='/'>Bountiful</a>
                </Grid>
                <Grid item xs={6}>
                  <div className ='wallet' float='right'><h4>Wallet Connected: {myDetails.address}</h4></div>
                </Grid>
                <Grid item xs={2}>
                  <a className="logo Submissions"  href=' https://airtable.com/shr86g6yJ6qQsOEoI'>Submit a Bounty</a>
                </Grid>
              </Grid>
            
            </div>
        </nav>
    )
}

export default MenuBar;