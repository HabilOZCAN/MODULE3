/**
 *yapilan calismada 80'e kadar olan rakamarin ingilizce ve turkce karisliklarina iliskin bir test
 hazilanmistir. program sonunda sonuc alert uzerinde gosterilmektedir.  
 */
import React, {useState} from "react";
import './stylesHO.css';
import {Shuffled} from './Shuffle';

export default function PageHO() {

    let startPosition =0;
    let endPosition = startPosition+4;
    let tempChunk = Shuffled.slice(startPosition, endPosition);
    let target;
    let targetQuestion;

    const [chunkWordList, setChunkWordList] = useState(tempChunk);
    const [position, setPosition] = useState(0);
    const [trueAnswers, setTrueAnswers] = useState(0);
    const [falseAnswers, setFalseAnswers] = useState(0);
    

    const LoadData =()=>{
        if(position ===80){
            alert(`Thank you for your participation you have ${trueAnswers} true answers and ${falseAnswers} false answers`);
            window.location.reload();    
        } else {
        setPosition(position+4); }
        startPosition = position;
        endPosition = startPosition+4;
        tempChunk = Shuffled.slice(startPosition, endPosition);
        setChunkWordList(tempChunk); 
    }
 
    const NextClick = (e)=>{
        if(target !==undefined){
            target.className='answer';
            if(targetQuestion === target.innerText){
                setTrueAnswers(trueAnswers+1);
            }else{
                setFalseAnswers(falseAnswers+1);
            }
        }
        LoadData();
    }
    
    const ControlClick = (e)=>{
        if(target !==undefined){
            target.className='answer';
        }
        targetQuestion = chunkWordList[0].meaning;
        target = e.target;
        target.className='chosen';
    }
    
    let index = [0, 1, 2, 3].sort(() => Math.random() - 0.5);

    return (
                <div className='mainScreenContainer'>
                    <h1>Word Card Game</h1>
                    <button className='next' onClick={NextClick}>Next</button>
                    <div className='questionIndicator'>Question: {position/4+1}</div>
                    <div className='qaContainer'>
                        <div className='question'>{chunkWordList[0].name}</div>
                        <div className='answer' onClick={ControlClick}>{chunkWordList[index[0]].meaning}</div>
                        <div className='answer' onClick={ControlClick}>{chunkWordList[index[1]].meaning}</div>
                        <div className='answer' onClick={ControlClick}>{chunkWordList[index[2]].meaning}</div>
                        <div className='answer' onClick={ControlClick}>{chunkWordList[index[3]].meaning}</div>
                    </div> 
                    <div className='counterContainer'>
                        <label id='true'>True: {trueAnswers}</label>
                        <label id='false'>False: {falseAnswers}</label>                
                    </div>
                </div>
            )
}
