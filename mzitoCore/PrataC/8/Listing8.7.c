// validating input
#include <stdio.h>
#include <stdbool.h>
// validate that input is an integer
long get_long(void);
// validate that range limits are valid
bool bad_limits(long, long, long, long);
// calculate the sum of the squares of the integers a through b
double sum_squares(long, long);
int main(void)
{
    const long MIN = -10000000L; // lower limit to range
    const long MAX = +10000000L; // upper limit to range
    long start;
    long stop;
    double answer;
    
    printf("This program computes the sum of the squares of "
            "integers in a range.\nThe lower bound should not "
            "be less than -10000000 and\nthe upper bound "
            "should not be more than +10000000.\nEnter the "
            "limits (enter 0 for both limits to quit):\n"
            "lower limit: ");
    start = get_long();
    printf("upper limit: ");
    stop = get_long();
    while (start != 0 || stop != 0) 
    {
        if (bad_limits(start, stop, MIN, MAX))
            printf("Please try again.\n");
        else 
        {
            answer = sum_squares(start, stop);
            printf("The sum of the squares of the integers ");
            printf("from %ld to %ld is %g\n", start, stop, answer);
        }
        printf("Enter the limits (enter 0 for both "
               "limits to quit):\n");
        printf("lower limit: ");
        start = get_long();
        printf("upper limit: ");
        stop = get_long();
    }
    printf("Done.\n");

    return 0;
}
