#include <stdio.h>
#include <string.h> // for strlen() prototype
#define DENSITY 62.4
int main(void) 
{
    float weight, volume;
    int size, letters;
    char name[40]; // name is an array of 40 chars

    printf("Hi! What's your first name?\n");
    scanf("%s", name);
    printf("%s, what's your weight in pounds?\n", name);
    scanf("%f", &weight);
    size = sizeof name;
    letters = strlen(name);
    volume = weight / DENSITY;
    
    return 0;
}