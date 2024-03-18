// textin3.cpp -- reading chars to end of file
#include <iostream>
int main()
{
    char ch;
    int count;
    std::cin.get(ch);
    while(std::cin.fail() == false) // test for EOF
    {
        std::cout << ch;
        ++count;
        std::cin.get(ch);    
    }
    std::cout << std::endl << count << " characters read\n";

    return 0;
}

// check this symbol !