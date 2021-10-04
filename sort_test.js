function bubbleSortConcept2(arr) {
    let swapped;

    do {
        swapped = false;
        console.log(arr);
        arr.forEach((item, index) => {
            if (item > arr[index + 1]) {
                let temp = item;
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                swapped = true;
            }
        })
    } while (swapped);
}

bubbleSortConcept2([5, 4, 9, 1, 3 ,7])