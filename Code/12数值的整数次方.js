/*
    author: Hush!
    time:   2019-12-01
*/
/*
    题目描述:
        给定一个double类型的浮点数base和int类型的整数exponent。
        求base的exponent次方。保证base和exponent不同时为0
*/
/*
    解题思路:
        考虑指数的正负
*/
//方法一:
function Power(x,n){
    if(n<0){
        if(x<=0){
            throw new Error("分母不能小于等于0");
        }else{
            if(-n %2==1){
                return 1 / (Power(x, -n-1)*x);
            }else{
                var r = 1 / (Power(x, -n/2));
                return r*r;
            }
        }
    }
    else if(n == 0){return 1;}
    else{
        if(n % 2 == 1){
            return Power(x, n-1) * x;
        }else{
            var r = Power(x, n/2);
            return r * r;
        }
    }
}
//方法二:
function power(base, exponent){
    if(exponent == 0) return 1;
    if(exponent == 1) return base;
    result = power(base, exponent >> 1) //除以2
    result *= result;
    if(exponent & 0x1 == 1) // 奇数 exponent % 2 == 1 
        result *= base;
    return result;
}