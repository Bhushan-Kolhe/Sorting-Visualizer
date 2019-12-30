var Actions = [];

const merge = (arr, start, mid, end) => {
    let start2 = mid + 1; 
  
    // If the direct merge is already sorted 
    if (arr[mid] <= arr[start2]) { 
        return; 
    } 
  
    // Two pointers to maintain start 
    // of both arrays to merge 
    while (start <= mid && start2 <= end) { 
  
        // If element 1 is in right place 
        if (arr[start] <= arr[start2]) { 
            start++; 
        } 
        else { 
            let value = arr[start2]; 
            let index = start2; 
  
            // Shift all the elements between element 1 
            // element 2, right by 1. 
            while (index != start) { 
                Actions.push(
                    {
                        action: 'Swap',
                        idx1: index,
                        idx2: index-1
                    }
                )
                arr[index] = arr[index - 1]; 
                Actions.push(
                    {
                        action: "UnSelect",
                        idx: index-1
                    }
                )
                index--; 
            } 
            arr[start] = value; 
  
            // Update all the pointers 
            start++; 
            mid++; 
            start2++; 
        } 
    }
}
const mergeSort = (arr, l , r) => {
    if (l < r) {
        var midpoint = Math.floor(l + (r - l) / 2);
        mergeSort(arr, l, midpoint);
        mergeSort(arr, midpoint+1, r);
        merge(arr, l, midpoint, r);
    }
}

const getMergeSortActions = (arr) => {
    Actions = [];
    mergeSort(arr,0, arr.length-1);
    return Actions;
}

export default getMergeSortActions;