/* fgets2.c -- using fgets() and fputs() */
#include <stdio.h>
#define STLEN 10
int main(void)
{
    char words[STLEN];

    // puts("Enter strings (empty line to quit):");
    // while (fgets(words, STLEN, stdin) != NULL && words[0] != '\n')
    //     fputs(words, stdout);
    // puts("Done.");

    puts("Enter strings (empty line to quit):");
    while (fgets(words, STLEN, stdin));
        puts("Done");

    puts("Enter anything you feel like bana");
    while (fgets(words, STLEN, stdin));
        puts("Done");
    
    puts("Enter Strings (Empty line to quit):");
    while (fgets(words, STLEN, stdin));
        puts("Done ");

    puts("Enter strings (empty line to quit):");
    while (fgets(words, STLEN, stdin));
        puts("Done");

    puts("Enter strings (empty line to quit):");
    while (fgets(words, STLEN, stdin));
        puts("Done");

    puts("Enter strings (empty line to quit):");
    while (fgets(words, STLEN, stdin))    ;
        puts("Done");

    puts("Enter strings (empty line to quit):");
    while (fgets(words, STLEN, stdin))
        puts("Done");
    return 0;
}