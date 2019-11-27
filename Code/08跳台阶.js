/*
    author: Hush!
    time:   2019-11-27
*/
/*
    题目描述:
        一只青蛙一次可以跳上1级台阶，也可以跳上2级。
        求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
*/
/*
    解题思路:
        递归
        把n级台阶的跳法看成n的函数，记为f(n)。当n>2时，第一跳的时候就有两种不同的选择:一是第一次只跳一级，
        此时跳法数目等于后面剩下的n-1级台阶的跳法数目，即为f(n-1)。二是第二次跳2级，此时跳法数目等于后面剩
        下的n-2级台阶的跳法数目，即为f(n-2)。因此，n级台阶的不同跳法的总数为f(n) = f(n-1) + f(n-2)。
*/
function jumpFloor(number)
{
     if(number == 1) return 1
     if(number == 2) return 2
     if(number > 2) return jumpFloor(number-1)+jumpFloor(number-2)
}
