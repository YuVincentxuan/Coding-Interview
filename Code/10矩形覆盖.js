/*
    author: Hush!
    time:   2019-11-29
*/
/*
    题目描述:
        我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
        请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
*/
/*
    解题思路:
        递归
        先把2*n的覆盖方法记为f(n)。用第一个2*1的小矩形去覆盖大矩形的最左边时有两种选择：
        竖着放或者横着放。当竖着放的时候，右边还剩2*(n-1)的区域，这种情况记为f(n-1)。接
        下来考虑横着放的情况。当2*1的小矩形横着放在左上角的时候，左下角必须横着放一个2*1
        的小矩形，而在右边还剩下2*6的区域，这种情形下的覆盖方法记为f(6)，因此f(n)=f(n-1)+f(n-2)。
*/
function rectCover(number)
{
    // write code here
    if(number == 0) return 0
    else if(number == 1) return 1
    else if(number == 2) return 2
    else return rectCover(number-1)+rectCover(number-2)
}