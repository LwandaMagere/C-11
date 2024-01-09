/* zippo1.c -- zippo info */
#include <stdio.h>
int main(void)
{
    int zippo[4][2] = { {2,4}, {6,8}, {1,3}, {5, 7} };
    
    printf("zippo = %p, zippo + 1 = %p\n", zippo, zippo + 1);

    return 0;
}