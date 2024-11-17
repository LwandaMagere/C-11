// namesp.h
#include <string>
// create the pers and debts namespaces
namespace pers 
{
    struct Person
    {
        std::string fname;
        std::string lname;
    };
    void getPerson(Person &);
    void showPerson(const Person &);
}

namespace debts
{
    using namespace pers;
    struct Debt
    {
        Person name;
        double amount;
    };
    void getDebt(Debt &);
    void showDebt(const Debt &);
    double sumDebts(const Debt ar[], int n);
    
}

// Namespaces are open, meaning that you can add names to existing namespaces.

/*
The using declaration lets you make particular identifiers available, 
and the using directive makes the entire namespace accessible.

using Jill::fetch;  // a using declaration


Suppose a namespace and a declarative region both define the same name. If you attempt
to use a using declaration to bring the namespace name into the declarative region, the
two names conflict, and you get an error. If you use a using directive to bring the name-
space name into the declarative region, the local version of the name hides the namespace
version.

The using directive is transitive

*/