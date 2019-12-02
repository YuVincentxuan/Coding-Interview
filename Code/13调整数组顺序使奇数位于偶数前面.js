/*
    author: Hush!
    time:   2019-12-02
*/
/*
    题目描述:
        输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
        使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
        并保证奇数和奇数，偶数和偶数之间的相对位置不变。
*/
/*
    解题思路:
        遇到偶数加入偶数数组，遇到奇数加到奇数组，最后合并。
*/
function reOrderArray(array)
{
    // write code here
    var oddArray = [],
        notOddArray = []
    array.forEach(item => {
        item%2 == 0 ? notOddArray.push(item) : oddArray.push(item)
    })
    return oddArray.concat(notOddArray)
}