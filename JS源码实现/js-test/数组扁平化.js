// 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

function flat(arr) {
    return arr.reduce((sum, item) => {
        if (Array.isArray(item)) {
            return [].concat(sum, flat(item));
        }
        return [].concat(sum, item);
    })
}

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]

console.log([...new Set(flat(arr))].sort((a, b) => a - b))