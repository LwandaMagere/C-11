#include <stdio.h>
#define SPACE ' '

int main(void)
{
    char ch;

    ch = getchar();  // read a character
    while (ch != '\n')
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