function rec_feb(num) {
    if (num < 2) return num;
    return rec_feb(num - 1) + rec_feb(num - 2);
}

console.log(rec_feb(5))

//измкенение тест-2
