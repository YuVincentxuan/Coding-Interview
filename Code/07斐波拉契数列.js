/*
    author: Hush!
    time:   2019-11-26
*/
/*
    题目描述:
        大家都知道斐波那契数列，现在要求输入一个整数n，
        请你输出斐波那契数列的第n项（从0开始，第0项为0）。n<=39
*/
/*
    解题思路:
        递归、循环
*/
function Fibonacci(n)
{
    if(n == 0){
        return 0;
    }
    var pre =0, cur =1;
    for(var i = 2; i <= n; i++){
        cur += pre;
        pre = cur - pre;
    }
    return cur;07
}