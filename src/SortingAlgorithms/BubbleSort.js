const swap = (arr, first_Index, second_Index) => {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

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
                        idx1: j,
                        idx2: j+1
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
};

export default getBubbleSortActions;