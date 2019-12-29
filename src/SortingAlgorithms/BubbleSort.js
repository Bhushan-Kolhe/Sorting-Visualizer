import swap from './swap';

const bubbleSort = (arr) => {
    var Actions = [];
    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            Actions.push(
                {
                    action: "Select",
                    idx: j
                }
            )
            if (arr[j] > arr[j+1]){
                Actions.push(
                    {
                        action: 'Swap',
                        idx1: j+1,
                        idx2: j
                    }
                )
                swap(arr, j, j+1);
            }
            Actions.push(
                {
                    action: "UnSelect",
                    idx: j
                }
            )
        }
    }
    return Actions;
}

const getBubbleSortActions = (arr) => {
    var Actions = bubbleSort(arr);
    return Actions;
}

export default getBubbleSortActions;