#include <stdio.h>
#define ADJUST 7.31

int main()
{
    const double SCALE = 0.333;
    double shoes, foot;

    shoes = 9.0;
    foot = SCALE * shoes + ADJUST;
    printf("Shoe size (men's) foot length\n");
    
    return 0;
}