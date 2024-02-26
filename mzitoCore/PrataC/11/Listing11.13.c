/* nono.c -- no! */
#include <stdio.h>
void put1(const char * string);
void put2(const char * string);
int main(void) 
{
    char side_a[] = "Side A";
    char dont[] = {'W', 'O', 'W', '!' };
    char side_b[] = "Side B";

    puts(dont); /* dont is not a string */

    return 0;
}

void put1(const char * string) 
{
    while (*string != '\0')
        putchar(*string++);
}

void put2(const char * string) 
{
    int count = 0;
    while (*string) 
    {
        putchar(*string++);
        count++;
    }
    putchar('\n');

    return count;
}

/*The char pointer string initially points to the first element of the called argument. Because
this function doesn’t change the string, use the const modifier. After the contents of that
element are printed, the pointer increments and points to the next element. This goes on until
the pointer points to an element containing the null character.*/