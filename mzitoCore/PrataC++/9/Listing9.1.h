                                            /* 9. Memory Models and Namespaces  */


// coordin.h -- structure templates and function prototypes
// structure templates

#ifndef COORDIN_H_
#define COORDIN_H_

struct polar
{
    double distance;
    double angle;
};

struct  rect
{
    double x;
    double y;
};

// prototypes
polar rect_to_polar(rect xypos);
void show_polar(polar dapos);

#endif

// * Separate compilation of programs
// * Storage duration, scope, and linkage
// * Placement new
// * Namespaces

// spreading a program over multiple files creates new problems.
 
// * A header file
// * A source code file that contains the code for the structure-related functions
// * A source code file that contains the code that calls the structure-related functions

// Template declarations aren’t code to be compiled; they are instructions to the compiler on 
// how to generate function definitions to match function calls found in the source code.