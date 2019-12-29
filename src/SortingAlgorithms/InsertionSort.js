const InsertionSort = arr => {
    var Actions = [];
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let el = arr[i];
        let j,k=0;
        for (j = i - 1; j >= 0 && arr[j] > el; j--) {
            Actions.push(
                {
                    action: 'Swap',
                    idx1: j+1,
                    idx2: j
                }
            )
            arr[j + 1] = arr[j];
            k = j;
        }
        Actions.push(
            {
                action: "UnSelect",
                idx: k
            }
        )
        arr[j + 1] = el;
    }
    return Actions;
  };

const getInsertionSortActions = arr => {
    var Actions = InsertionSort(arr);
    return Actions;
};


export default getInsertionSortActions;