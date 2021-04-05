import React, { Component } from 'react';
import {Foreigners} from './Foreigners';
import './components.css'

export default class PersonGeneral extends Component {
    render() {
        
        let personIndex= this.props.personIndex;
        let person = Foreigners;

        let targetPerson = [{
            "first_name": person[personIndex].first_name,
            "last_name": person[personIndex].last_name,
            "address": person[personIndex].address,
            "salary": person[personIndex].salary,
            "gender": person[personIndex].gender,
            "email": person[personIndex].email,
            "avatar": person[personIndex].avatar,
            "childerenNumber":  person[personIndex].children.length,
            "friendsNumber":  person[personIndex].friends.length
            }][0];

        console.log(targetPerson);
        return (
            <div className='headerPart'>
                <h1>Foreigners Profile Page</h1>
                <div className='AvatarGeneral'>
                    <img src={targetPerson.avatar} alt='avatar'></img>
                    <p>Children: {targetPerson.childerenNumber}</p>
                    <p>Friends: {targetPerson.friendsNumber}</p>
                </div>
                <div className='informationContainer'>
                    <section>
                        <h2>Personal</h2>
                        <div className='info'>
                            <p>LastName: {targetPerson.last_name}</p>
                            <p>FirstName: {targetPerson.first_name}</p>
                        </div>
                        <div className='info'>
                            <p>Adress: {targetPerson.address}</p>
                            <p>Salary: {targetPerson.salary}</p>
                        </div>
                        <div className='info'>
                            <p>Gender: {person[`${personIndex}`].gender}</p>
                            <p>Email: {person[`${personIndex}`].email}</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
