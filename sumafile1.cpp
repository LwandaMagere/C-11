// functions with an array arguement
#include <iostream>
#include <fstream>
#include <cstdlib> // support for exit()

const int SIZE = 60;

int main()
{
    using namespace std;

    char filename[SIZE];
    ifstream inFile; // object for handlinig file input

    cout << "Enter name of data file: ";
    cin.getline(filename, SIZE);
    inFile.open(filename); // associate inFIle with a file
    if (!inFile.is_open()) // failed to open file
    {
        cout << "Could not open the file " << filename << endl;
        cout << "Program terminatin.\n";
        exit(EXIT_FAILURE);
    }
    double value;
    double sum = 0.0;
    int count = 0; // numbwer of items read

    inFile >> value; // get first value
    while (inFile.good()) // while input good and not at EOF
    {
        ++count;
        sum += value;
        inFIle >> value; // get next value
    }
    if (inFIle.eof())
        cout << "End of file reached.\n";
    else if (inFile.fail())
        cout << "Input terminate by data mismatch.\n";
    else 
        cout << "Input terminated for unknown reasopon.\n";
    if (count == 0)
        cout << "No data processed.\n";
    else 
    {
        cout << "Items read: " << count << endl;
        cout << "Sum: " << sum << endl;
        cout << "Average: " << sum / count << endl;
    }
    inFile.close();

    return 0;
}