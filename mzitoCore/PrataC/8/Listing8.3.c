// file_eof.c --open a file and display it
#include <stdio.h>
#include <stdlib.h>
int main(void) 
{
    int ch;
    FILE * fp;
    char fname[50]; // to hold the file name

    printf("Enter the name of the file: ");
    scanf("%s", fname);
    if (fp == NULL) 
    {
        printf("Failed to open file. Bye\n");
        exit(1);
    }
    // getc(fp) gets a character from the open file
    while ((ch = getc(fp)) != EOF)
        putchar(ch);
    fclose(fp);
    
    return 0;
}