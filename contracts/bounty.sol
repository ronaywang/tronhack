//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
contract Bounty {
    struct Post {
       string address;
       string description;
       bool claimed; // false if has not been claimed
       uint256 price; // current TRX bid
   }
     function claim(Post x) public {
        x.claimed = True;
    }
}