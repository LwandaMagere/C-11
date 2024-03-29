#include <iostream>
#include <string>
#include <new>
using namespace std;
const int BUF = 512;

class Justesting
{
    private:
        string words;
        int number;
    public:
        Justesting(const string & s = "Just Testing", int n = 0)
        {words = s; number = n; cout << words << " constructed\n"; }
        ~Justesting() {cout << words << " destroyed\n";}
        void Show() const {cout << words << ", " << number << endl;}
};

int main()
{
    char * buffer = new char[BUF];

    Justesting *pc1, *pc2;

    pc1 = new (buffer) Justesting;
    pc2 = new Justesting("Heap1", 20);

    cout << "Memory block addresses:\n" << "buffer: "
        << (void *)buffer << "   heap: " << pc2 << endl;
    cout << "Memory contents:\n";
    cout << pc1 << ": ";
    pc1->Show();
    cout << pc2 << ": ";
    pc2->Show();

    Justesting *pc3, *pc4;

    // fix placement new location
    pc3 = new (buffer + sizeof (Justesting)) Justesting("Better Idear", 6);
    pc4 = new Justesting("Heap2", 10);

    cout << "Memory contents:\n";
    cout << pc3 << ": ";
    pc3->Show();
    cout << pc4 << ": ";
    pc4->Show();

    delete pc2;
    delete pc4;
    // explicitly destroy placement new objects
    pc3->~Justesting();
    pc1->~Justesting();
    delete [] buffer;
    cout << "Done\n";
    return 0;
}