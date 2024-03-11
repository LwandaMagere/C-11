/* width.c -- field widths */
#include <stdio.h>
#define PAGES 959
int main(void) 
{
    printf("*%d*\n", PAGES);
    printf("*%2d*", PAGES);
    printf("*%10d*", PAGES);
    printf("*%-10d*", PAGES);
    
    return 0;
}