/* addemup.c -- five kinds of statements */
#include <stdio.h>
int main(void) 
{
    int count, sum;  /* declaration statement */
    count = 0;   // assignment statement
    sum = 0;  // ditto
    while (count++ < 20)  //  while statement
        sum = sum + count;
    printf("sum = %d\n", sum);  // function statement

    return 0; // return statement
}