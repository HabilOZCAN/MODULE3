import React, { Component } from 'react';
import Parser from 'html-react-parser';
import {Foreigners} from './Foreigners';

export default class FriendsGeneral extends Component {
    render() {
        
        let person = Foreigners;
        let personIndex =this.props.personIndex;
        let tPersonFriends = person[personIndex].friends;


        let totalInnerHTML= `
        <div class='friendsPart'>
            <p>Friends</p>
        </div>`;

        tPersonFriends.forEach(friend => {
            totalInnerHTML +=`<div class = "friendsPart">
                            <img src= '${friend.avatar}' alt= "image"></img>
                            <p>First Name: ${friend.firstName}</p>
                            <p>First Name: ${friend.lastName}</p>
                            <p>Gender: ${friend.gender}</p>
                            <p>Phone: ${friend.phone}</p>
                        </div>\n`;
            });     
                          


        return (
            <div className = 'friendContainer'>
                {Parser(totalInnerHTML)}
            </div>
        )
    }
}
