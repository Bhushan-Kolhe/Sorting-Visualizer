import React from 'react';
import { useState, useEffect } from 'react';
import getBubbleSortActions from '../../SortingAlgorithms/BubbleSort';
import getSlectionSortActions from '../../SortingAlgorithms/SelectionSort';
import getInsertionSortActions from '../../SortingAlgorithms/InsertionSort';
import getQuickSortActions from '../../SortingAlgorithms/QuickSort';
import getMergeSortActions from '../../SortingAlgorithms/MergeSort';
import { Grid, Button, Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider'
import './UI.css';


const Action_Speed = 101;
const No_of_Elements = 30;
const Primary_colour = "#109de3";
const Secondary_Colour = "#ff00cc";
const Tertiary_Colour = "#d9e800";
let ActionSpeed = Action_Speed;

const theme = createMuiTheme({
    palette: {
      primary: blue,
    },
  });

function UI() {
    const [ arr, setArr ] = useState([]);
    const [ len, setLen ] = useState(No_of_Elements);
    const [ sortingAlgo,setSortingAlgo ] = useState("");
    const [ sortButton, setSortButton] = useState(true);
    const  getRandomInt = (min, max) => Math.floor(Math.random() * Math.floor(max-min)) + Math.floor(min);
    let actions;
    

    const onChangeArrayLength = (e, val) => {
        setLen(val);
    }

    const onChangeSpeed = (e, val) => {
        ActionSpeed = Action_Speed - (val*10);
    }

    const onClickSort = (e) => {
        if(sortButton){
            document.getElementById("Overlay").style.pointerEvents = "all";
            switch (sortingAlgo){
                case "Merge Sort":
                    mergeSort();
                    break;
                case "Bubble Sort":
                    bubbleSort();
                    break;
                case "Insertion Sort":
                    insertionSort();
                    break;
                case "Selection Sort":
                    selectionSort();
                    break;
                case "Quick Sort":
                    quickSort();
                    break;
                default:
                    console.log("Invalid Sort");
                    document.getElementById("Overlay").style.pointerEvents = "none";
                    break;
            }
        } else {
            generateArray();
            setSortButton(true);
        }
    }

    const onSelectAlgorithm = (e) => {
        setSortingAlgo(e.target.value);
    }

    const animateActions = async (actions) => {
        let i= 0;
        actions.forEach(element => {
            i += 1;
            const arrayBars = document.getElementsByClassName('array-Bar');
            switch (element.action){
                case "Select":
                    setTimeout(() => {
                        arrayBars[element.idx].style.background = Secondary_Colour;
                    },i*ActionSpeed);
                    break;
                case "SelectMin":
                    setTimeout(() => {
                        arrayBars[element.idx].style.background = Tertiary_Colour;
                    },i*ActionSpeed);
                    break;
                case "UnSelect":
                    setTimeout(() => {
                        arrayBars[element.idx].style.background = Primary_colour;
                    },i*ActionSpeed);
                    break;
                case "UnSelectMin":
                    setTimeout(() => {
                        arrayBars[element.idx].style.background = Primary_colour;
                    },i*ActionSpeed);
                    break;
                case "Swap":
                    setTimeout(() => {
                        var temp = arrayBars[element.idx1].style.height;
                        arrayBars[element.idx1].style.height = arrayBars[element.idx2].style.height;
                        arrayBars[element.idx2].style.height = temp;
                        arrayBars[element.idx1].style.background = Primary_colour;
                        arrayBars[element.idx2].style.background = Secondary_Colour;
                    },i*ActionSpeed);
                    break;
                case "SwapMin":
                    setTimeout(() => {
                        var temp = arrayBars[element.idx1].style.height;
                        arrayBars[element.idx1].style.height = arrayBars[element.idx2].style.height;
                        arrayBars[element.idx2].style.height = temp;
                        arrayBars[element.idx1].style.background = Primary_colour;
                        arrayBars[element.idx2].style.background = Tertiary_Colour;
                    },i*ActionSpeed);
                    break;
                default:
                    console.log("Invalid Action");
                    break;
            }
        });
        setTimeout(() => {
            document.getElementById("Overlay").style.pointerEvents = "none";
            setSortButton(false);
        }, actions.length * ActionSpeed);
        
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

    const quickSort = () => {
        console.log("calling Quick sort");
        actions = getQuickSortActions(arr);
        animateActions(actions);
    }

    const mergeSort = () => {
        console.log("calling Merge sort");
        actions = getMergeSortActions(arr);
        animateActions(actions);
    }

    const generateArray = () => {
        var tempArr = []
        for(var i=0; i<len; i++)
            tempArr.push(getRandomInt(50,500));
        setArr(tempArr);
    }

    useEffect(() => {
        generateArray();
    }, [len] )


    return (
        <div >
            <div id="Overlay"></div>
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
                            border: "1px solid #FFF",
                            color: "#fff"
                            }}
                          >
                         </div>
                    ))
                }
            </div>
            <div id="UI">
            <ThemeProvider theme={theme}>
                <Grid container justify="center" alignItems="center">
                    <Grid item style={{margin:"0 20px"}} >
                        <Typography id="discrete-slider" gutterBottom>
                            Array Length
                        </Typography>
                        <Slider style={{width: "200px"}}
                            defaultValue={No_of_Elements}
                            valueLabelDisplay="auto"
                            step={1}
                            min={30}
                            max={300}
                            onChange={onChangeArrayLength}
                        />
                    </Grid>
                    <Grid item style={{margin:"0 20px"}}>
                        <Typography id="discrete-slider" gutterBottom>
                            Speed
                        </Typography>
                        <Slider style={{width: "200px"}}
                            defaultValue={1}
                            valueLabelDisplay="auto"
                            step={1}
                            min={1}
                            max={10}
                            onChange={onChangeSpeed}
                        />
                    </Grid>
                    <Grid item style={{margin:"0 20px"}}>
                        <FormControl >
                            <InputLabel id="demo-simple-select-label">Sorting Algorithm</InputLabel>
                            <Select
                            style={{width: "200px"}}
                            labelId="demo-simple-select-label"
                            value={sortingAlgo}
                            onChange={onSelectAlgorithm}
                            >
                            <MenuItem value={"Merge Sort"}>Merge Sort</MenuItem>
                            <MenuItem value={"Quick Sort"}>Quick Sort</MenuItem>
                            <MenuItem value={"Bubble Sort"}>Bubble Sort</MenuItem>
                            <MenuItem value={"Insertion Sort"}>Insertion Sort</MenuItem>
                            <MenuItem value={"Selection Sort"}>Selection Sort</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item style={{margin:"0 20px"}}>
                        <Button  
                        size="large" 
                        variant="contained" 
                        color="secondary" 
                        onClick={onClickSort}
                        >
                        {sortButton? "Sort": "Reset"}
                        </Button>
                    </Grid>
                </Grid >
            </ThemeProvider>
            </div>
        </div>
    )
}

export default UI;