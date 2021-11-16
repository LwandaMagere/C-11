// reading more than one word with getline
#include <iostream>
#include <string>

int main()
{
    using std::string;
    using std::cin;
    using std::cout;

  string name1, name2;

    cout << "What is your name?\n";
    cin >> name1;
    
    cout << "What is your second name?\n";
    cin >> name2;
    

    cout << "Your name is " << name1 << " "  << name2 << std::endl;

    
    return 0;
}