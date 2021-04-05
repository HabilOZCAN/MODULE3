import React, { Component } from 'react';
import Parser from 'html-react-parser';
import {Foreigners} from './Foreigners';

export default class KidsGeneral extends Component {
    render() {

        let person = Foreigners;
        let personIndex =this.props.personIndex;
        let tPersonChildren = person[personIndex].children;

        let totalInnerHTML= `
        <div class='childrenPart'>
            <p>Children</p>
        </div>`;
        tPersonChildren.forEach(child => {
        totalInnerHTML +=`<div class = "childrenPart">
                        <img src= '${child.avatar}' alt= "image"></img>
                        <p>First Name: ${child.firstName}</p>
                        <p>Gender: ${child.gender}</p>
                        <p>BirthDay: ${child.birthday}</p>
                    </div>\n`;
        });     
                
        return (
            <div className = 'childrenContainer'>
                {Parser(totalInnerHTML)}
            </div>
        )
    }
}
