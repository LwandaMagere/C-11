#include <iostream>
#include <thread>
void hello() 
{
    std::cout << "Hello Concurrent World\n";
    std::cout << "use g++ main.cpp -o main.out -pthread -std=c++11\n";
    std::cout << "For compilation\n";
}

int main()
{
    std::thread t(hello);
    t.join();

    return 0;
}

// g++ main.cpp -o main.out -pthread -std=c++11
