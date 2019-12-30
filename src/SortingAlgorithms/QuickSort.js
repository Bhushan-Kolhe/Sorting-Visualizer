import swap from './swap';

var Actions = [];

const partition = (items, left, right) => {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            Actions.push(
                {
                    action: 'Swap',
                    idx1: j,
                    idx2: i
                }
            )
            Actions.push(
                {
                    action: "Select",
                    idx: j
                }
            )
            Actions.push(
                {
                    action: "UnSelect",
                    idx: i
                }
            )
            Actions.push(
                {
                    action: "UnSelect",
                    idx: j
                }
            )
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
}

const getQuickSortActions = (arr) => {
    Actions = [];
    quickSort(arr, 0, arr.length-1);
    return Actions;
}

export default getQuickSortActions;