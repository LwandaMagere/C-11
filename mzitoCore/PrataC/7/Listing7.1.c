// colddays.c -- finds percentage of days below freezing
#include <stdio.h>
#define SPACE ' '

int main() 
{
    char ch;

    ch = getchar();   // read a character
    while (ch != '\n') // while not end of line 
    {
        if (ch == SPACE)
            putchar(ch);
        else 
            putchar(ch + 1);
        ch = getchar();
    }
    putchar(ch);

    return 0;
}