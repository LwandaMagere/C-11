// file2.cpp -- contains functions called in file1.cpp
#include <iostream>
#include <cmath>
#include "Listing9.1.h" // structure templates, function prototypes

// convert rectangular to polar coordinates
polar rect_to_polar(rect xypos)
{
    using namespace std;
    polar answer;
    answer.distance =
    sqrt( xypos.x * xypos.x + xypos.y * xypos.y);
    answer.angle = atan2(xypos.y, xypos.x);
    return answer;          // returns a polar structure
}

// show polar coordinates, converting angle to degrees
void show_polar (polar dapos)
{
    using namespace std;
    const double Rad_to_deg = 57.29577951;
    cout << "distance = " << dapos.distance;
    cout << ", angle = " << dapos.angle * Rad_to_deg;
    cout << " degrees\n";
}

// C++, like C, provides static storage duration variables with three kinds of linkage: external
// linkage (accessible across files), internal linkage (accessible to functions within a single
// file), and no linkage (accessible to just one function or to one block within a function)

// Because the number of static variables doesn’t change as the program runs, the program
//  doesn’t need a special device such as a stack to manage them.
// Instead, the compiler allocates a fixed block of memory to hold all the static variables, 
// and those variables stay present as long as the program executes.


/*

    ...
    int global = 1000;           // static duration, external linkage
    static int one_file = 50;   // static duration, internal linkage

    int main()
    {
        ...
    }

    void funct1(int n)
    {
        static int count = 0;  // static duration, no linkage
        int llama = 0;
        ...
    }

    void funct2(int q)
    {
    ...
    }


 */