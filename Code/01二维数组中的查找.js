/*
    author: Hush!
    time:   2019-11-16
*/
/*
    题目描述:
        在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序
        排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二
        维数组和一个整数，判断数组中是否含有该整数。
*/
/*
    解题思路:
        从左下角开始寻找，比左下角大则王右移动，比左下角小则往上移动。
*/
//方法一:
function Find(target, array){
    let lenX = array.length;
    let lenY = array[0].length;
    for(let i = lenX - 1, j = 0; i >= 0 && j < lenY; ){
        if(target > array[i][j]){
            j++;
        }else if(target < array[i][j]){
            i--;
        }else{
            return false;
        }
    }
}

//方法二:
//这种写法的答案是满足题意的，但是不太推荐
function Find(target, array)
{
  return array.some(arr => arr.some( e => e === target ))
} 