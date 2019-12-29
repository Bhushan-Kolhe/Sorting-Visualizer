import React from 'react';
import { useState, useEffect } from 'react';
import getBubbleSortActions from '../../SortingAlgorithms/BubbleSort';
import getSlectionSortActions from '../../SortingAlgorithms/SelectionSort';
import getInsertionSortActions from '../../SortingAlgorithms/InsertionSort';
import './UI.css';


const Action_Speed = 10;
const No_of_Elements = 50;
const Primary_colour = "#109de3";
const Secondary_Colour = "#ff00cc";
const Tertiary_Colour = "#d9e800";

function UI() {
    const [ arr, setArr ] = useState([]);
    const [ len, setLen ] = useState(No_of_Elements);
    const  getRandomInt = (min, max) => Math.floor(Math.random() * Math.floor(max-min)) + Math.floor(min);
    var actions;

    const animateActions = (actions) => {
        var i= 0;
        actions.forEach(element => {
            i += 1;
            const arrayBars = document.getElementsByClassName('array-Bar');
            switch (element.action){
                case "Select":
                    setTimeout(() => {
                        arrayBars[element.idx].style.background = Secondary_Colour;
                    },i*Action_Speed);
                    break;
                case "SelectMin":
                    setTimeout(() => {
                        arrayBars[element.idx].style.background = Tertiary_Colour;
                    },i*Action_Speed);
                    break;
                case "UnSelect":
                    setTimeout(() => {
                        arrayBars[element.idx].style.background = Primary_colour;
                    },i*Action_Speed);
                    break;
                case "UnSelectMin":
                    setTimeout(() => {
                        arrayBars[element.idx].style.background = Primary_colour;
                    },i*Action_Speed);
                    break;
                case "Swap":
                    setTimeout(() => {
                        var temp = arrayBars[element.idx1].style.height;
                        arrayBars[element.idx1].style.height = arrayBars[element.idx2].style.height;
                        arrayBars[element.idx2].style.height = temp;
                        arrayBars[element.idx1].style.background = Primary_colour;
                        arrayBars[element.idx2].style.background = Secondary_Colour;
                    },i*Action_Speed);
                    break;
                case "SwapMin":
                    setTimeout(() => {
                        var temp = arrayBars[element.idx1].style.height;
                        arrayBars[element.idx1].style.height = arrayBars[element.idx2].style.height;
                        arrayBars[element.idx2].style.height = temp;
                        arrayBars[element.idx1].style.background = Primary_colour;
                        arrayBars[element.idx2].style.background = Tertiary_Colour;
                    },i*Action_Speed);
                    break;
                default:
                    console.log("Invalid Action");
                    break;
            }
        });
    }

    const bubbleSort = () => {
        console.log("calling Bubble sort");
        actions = getBubbleSortActions(arr);
        animateActions(actions);
    }

    const selectionSort = () => {
        console.log("calling Selection sort");
        actions = getSlectionSortActions(arr);
        animateActions(actions);
    }

    const insertionSort = () => {
        console.log("calling Insertion sort");
        actions = getInsertionSortActions(arr);
        animateActions(actions);
    }

    useEffect( () => {
        var tempArr = []
        for(var i=0; i<len; i++)
            tempArr.push(getRandomInt(50,500));
        setArr(tempArr);
    }, [len] )


    return (
        <div>
            <div id="ArrayContainer">
                {
                    arr.map(element => ( 
                        <div 
                        className="array-Bar"
                         key={Math.random()} 
                         style={{ 
                            background: Primary_colour,
                            width: "30px",
                            height: `${element}px`,
                            border: "1px solid #FFF"
                            }}
                          >
                         </div>
                    ))
                }
            </div>
            <button onClick={e => insertionSort()} >Sort</button>
        </div>
    )
}

export default UI;