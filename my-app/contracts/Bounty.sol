//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
abstract contract Context {
   function _msgSender() internal view virtual returns (address) {
       return msg.sender;
   }

   function _msgData() internal view virtual returns (bytes calldata) {
       this; 
       return msg.data;
   }

   function _msgValue() internal view virtual returns (uint256 value) {
       return msg.value;
   }
}


contract Bounty {
    struct Post {
       bool claimed; // false if has not been claimed
       uint256 price; // current TRX bid
       address delegate;
   }

   uint256 public postId;

    mapping (uint256 => Post) public posts;

   
    function claim(uint256 _postId) public {
        require(post.claimed = false, "Bounty has already been claimed");

    }
    function get(Post memory post) public view returns (uint) {
        return post.price;
    }
    function bid(uint x, Post memory post) public {
        post.price += x;
    }
    function addPost(uint id, )

}