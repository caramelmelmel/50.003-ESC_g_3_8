import React, { Component } from 'react';

function RenderfromLS() {
    //these are the keys from LS 
    //"nc" + this.state.checklistItem.id
    //eg: ncprofessionalism_01 

    //check if click checklistItem.id
    var storedArray = JSON.parse(localStorage.getItem("storedArray"));

    console.log(storedArray);

    /*if (storedArray === null) {
        storedArray = [];
    }

    var obj = {
        email: "test@email.com",
        age: 15,
        name: "username"
    };

    storedArray.push(obj);
    localStorage.setItem("storedArray", JSON.stringify(storedArray));*/
}

export default RenderfromLS;