//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
contract Bounty {
    struct Post {
       string addr;
       string description;
       bool claimed; // false if has not been claimed
       uint256 price; // current TRX bid
   }
   
    function claim(Post post) public {
        post.claimed = true;
    }
    function get(Post post) public view returns (uint) {
        return post.price;
    }
    function bid(uint x, Post post) public {
        post.price += x;
    }

     function addPost(string memory addr, string memory description, uint256 price) public returns (bool success) {
       Post memory post = Post(addr, description, true);


       emit NewPost();

       return true;
   }
}