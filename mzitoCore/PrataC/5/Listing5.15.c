#include <stdio.h>
void pound(int);

int main(void)
{
    int times = 5;
    char ch = '!'; // ASCII code is 33
    float f = 6.0f;
    pound(times);
    pound(ch);
    pound(f);
    return 0;
}

void pound(int n) 
{
    while (n-- > 0)
        printf("#");
    printf("\n");
}