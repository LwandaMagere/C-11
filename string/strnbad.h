// flawed string class defination
#include <iostream>
#ifndef STRINGBAD_H_
#define STRINGBAD_H_

class StringBad
{
        char *str;
        int len;
        static int num_strings;
    public:
        StringBad(const char * s);
        StringBad();
        ~StringBad();
        friend std::ostream & operator<<(std::ostream & os, const StringBad & st);

};

#endif