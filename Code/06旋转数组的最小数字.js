/*
    author: Hush!
    time:   2019-11-25
*/
/*
    题目描述:
        把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
        输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
        例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
        NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
*/
/*
    解题思路:
        二分查找
*/
//方法一:
function minNumberInRotateArray(rotateArray)
{
    // write code here
    var tmp = rotateArray[0];
    for(var i = 0, len = rotateArray.length; i<len; i++){
        if(tmp > rotateArray[i]){
            index = i;
            break;
        }
    }
    var newArray1 = rotateArray.slice(0,i)
    var newArray2 = rotateArray.slice(i,len)
    return len > 0 ? newArray2.concat(newArray1)[0] : 0 
}
//方法二:
while (line = readline()) {
    let arr = line.replace(/\[|\]/g, '').split(',');
    console.log(Math.min(...arr));
}
