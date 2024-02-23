#include <stdio.h>

char * s_gets(char * st, int n) 
{
    char * ret_val;
    int i = 0;

    ret_val = fgets(st, n, stdin);
    if (ret_val) // i.e if ret_val != NULL
    {
        while (st[i] != '\n' && st[i] != '\0')
            i++;
        if (st[i] == '\n')
            st[i] = '\0';
        else // must have words[i] == '\0'
            while (getchar() != '\n')
                continue;

    }
    return ret_val;
}

/*If fgets() returns NULL , indicating end-of-file or a read error, s_gets() skips the rest of the
processing. Otherwise, it imitates Listing 11.9 , replacing the newline character with a null char-
acter if the former is present in the string, and discarding the rest of the line otherwise. It then
returns the same value fgets() returned.*/