/* strptr.c -- strings as pointers */
#include <stdio.h>
int main(void)
{
    printf("%s, %p, %c,", "We", "are", *"space farer");
    
    return 0;
}