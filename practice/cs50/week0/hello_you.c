#include <cs50.h>
#include <stdio.h>
// Thats only work in cs50 IDE
int main(void)
{
    string answer = get_string("What's your name? ");
    printf("hello, %s\n", answer);
}