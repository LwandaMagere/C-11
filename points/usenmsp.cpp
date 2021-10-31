// usenmsp.cpp -- using namespaces
#include <iostream>
#include "namesp.h"

void other(void);
void another(void);

int main()
{
    return 0;
}

void other(void)
{
    using std::cout;
    using std::cout;
    using namespace debts;
    Person dg = {"Doodles", "Glister"};
    showPerson(dg);
    cout << endl;
    Debt zippy[3];
    int i;
    for (i = 0; i < 3; i++)
        getDebt(zippy[i]);

    for (i = 0; i < 3; i++)
        showDebt(zippy[i]);
    cout << "Total debt: $" << sumDebt(zippy, 3) << endl;
    return;
}

void another(void)
{
    using pers::Person;
    Person collector = {"Millo", "Rightshift"};
    pers::showPerson(collector);
    std::cout << std::endl;
}