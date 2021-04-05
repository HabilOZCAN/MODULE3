import React, { Component } from 'react'
import PersonGeneral from './PersonGeneral';
import KidsGeneral from './KidsGeneral';
import FriendsGeneral from './FriendsGeneral';
import Buttons from './Buttons';

/**
 * calismada hazilanan komponontlar icin sadece tek bir css dosyasi olusturulmustur.
 * hazirlanan komponontlar Foreigners.js haricinde genel kisi bilgisi, cocuk bilgisi, arkadas
 * bilgisi ve buton lar icin hazirlanmitir. Ayrica dynamic olarak innerHTML guncellenemsini
 * stringden saglamak maksadiyla html-react-parser modulu import edilmistir.
 */


export default class Profil extends Component {

    constructor(){
        super();
        this.state = {index: 0};
        this.getData = this.getData.bind(this);
    }

    getData(value){
        this.setState({index:value});
    }


    render() {
        return (
            <div>
                <PersonGeneral personIndex = {this.state.index}/>
                <KidsGeneral personIndex = {this.state.index}/>
                <FriendsGeneral personIndex = {this.state.index}/>
                <Buttons data={{getData:this.getData,
                                personIndex: this.state.index}}/>
            </div>
        )
    }
}
