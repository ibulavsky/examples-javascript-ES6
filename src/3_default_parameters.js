{
    const sum = (a, b) => a + b;
    console.log(sum()); // NaN
    console.log(sum(1, 2)); // 3
}
{
    const defaultB = 1;
    const sum = (a = 0, b = defaultB) => a + b;
    console.log(sum()); // 1
    console.log(sum(1, 2)); // 3
}
{
    const getDefault = num => num * 3;
    const sum = (a = 1, b = getDefault(a)) => a + b;
    console.log(sum()); // 4
    console.log(sum(1, 2)) // 3
}



