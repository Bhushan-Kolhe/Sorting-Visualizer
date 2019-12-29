import swap from './swap';

const selectionSort = (arr) => {
    var Actions = [];
    var len = arr.length;
    for (var i = 0; i < len - 1; i = i + 1) {
        var j_min = i;
        Actions.push(
            {
                action: "SelectMin",
                idx: j_min
            }
        )
        for (var j = i + 1; j < len; j = j + 1) {
            Actions.push(
                {
                    action: "Select",
                    idx: j
                }
            )
            if (arr[j] < arr[j_min]) {
                Actions.push(
                    {
                        action: "UnSelectMin",
                        idx: j_min
                    }
                )
                j_min = j;
                Actions.push(
                    {
                        action: "SelectMin",
                        idx: j_min
                    }
                )
            } else{
                Actions.push(
                    {
                        action: "UnSelect",
                        idx: j
                    }
                )
            }
            
        }
        if (j_min !== i) {
            Actions.push(
                {
                    action: 'SwapMin',
                    idx1: j_min,
                    idx2: i
                }
            )
            swap(arr, i, j_min);
            Actions.push(
                {
                    action: "UnSelect",
                    idx: i
                }
            )
        }
        Actions.push(
            {
                action: "UnSelectMin",
                idx: j_min
            }
        )
    }
    console.log(arr);
    return Actions;
}

const getSlectionSortActions = (arr) => {
    var Actions = selectionSort(arr);
    return Actions;
}


export default getSlectionSortActions;