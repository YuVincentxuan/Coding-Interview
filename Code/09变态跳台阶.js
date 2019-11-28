/*
    author: Hush!
    time:   2019-11-28
*/
/*
    题目描述:
        一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。
        求该青蛙跳上一个n级的台阶总共有多少种跳法。
*/
/*
    解题思路:
        递归+归纳
        得出规律为f(n) = 2*f(n-1)
               
                |- 1  (n = 0)
        f(n) = -|  1  (n = 1)
                |- 2*f(n-1) (n>=2)

*/
//方法一:
function jumpFloor(number){
    if(number <= 0){
        return -1; 
    }else if(number == 1){
        return 1;
    }else{
        return 2 * jumpFloor(number - 1);
    }
}
//方法二:
function jumpFloorII(number)
{
    return 1<<(--number);
}
