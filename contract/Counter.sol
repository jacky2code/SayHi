// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Counter {
    uint private counts;

    constructor() {
        counts = 0;
    }

    function addcounter() public {
        counts++;
    }

    function getcounter() public view returns (uint) {
        
        return counts;
    }
}