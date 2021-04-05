import React, {
    Component
} from 'react'

export default class Buttons extends Component {
    render() {
     
        let personIndex = this.props.data.personIndex;
            const preFunction = (e) => {
                if(personIndex>0){
                    personIndex--;
                    console.log(personIndex);
                }
                this.props.data.getData(personIndex);
            };

            const nextFunction = (e) => {
               if(personIndex<9){
                    personIndex++;
                    console.log(e.target.className);
                }
                this.props.data.getData(personIndex);
            };


        return ( <div>
            <button id = 'previous' className = 'prevBtn Btn' onClick={preFunction}>Pre</button>
            <button id = 'next' className = 'nexBtn Btn' onClick={nextFunction}>Next</button> </div>
        )
    }
}