// numstr.cpp -- following number input with line input
#include <iostream>
// #include <string> test
#include <string>
int main()
{
    using namespace std;
    
    // cout << "What year was your house built?\n";
    // // string year;
    // int year;
    // cin >> year;
    // cout << "What is its street address?\n";
    // char address[80];
    // cin.getline(address, 80);
    // cout << "Year built: " << year << endl;
    // cout << "Address: " << address << endl;
    // cout << "Done!\n";

    string name; 
    string name2;
    cout << "What is your name?" << endl;
    cin >> name;
    cout << "What is your second name?" << endl;
    cin >> name2;
    cout << "Your first name is " << name << endl;
    cout << "Your second name is " << name2 << endl;



    return 0;
}