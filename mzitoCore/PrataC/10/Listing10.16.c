/* zippo2.c -- zippo info via a pointer variable */
#include <stdio.h>
int main(void)
{
    int zippo[4][2] = { {2,4}, {6,8}, {1,3}, {5, 7} };
    int (*pz)[2];
    pz = zippo;
    printf(" pz = %p, pz + 1 = %p\n", pz, pz + 1);
    
    return 0;
}