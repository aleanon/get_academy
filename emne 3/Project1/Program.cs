// See https://aka.ms/new-console-template for more information

var quit = false;

while (!quit)
{
    Console.SetCursorPosition(0,0);
    
    int[] numbers= [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    
    Console
        .Write(
             "---------------------------\n"
            + "|        |        |        |\n"
            + $"|   {numbers[0]}    |   {numbers[1]}    |    {numbers[2]}   |\n" 
            + "|        |        |        |\n" 
            + "---------------------------\n"
            + "|        |        |        |\n" 
            + $"|   {numbers[3]}    |    {numbers[4]}   |    {numbers[5]}   |\n" 
            + "|        |        |        |\n" 
            + "---------------------------\n"
            + "|        |        |        |\n" 
            + $"|   {numbers[6]}    |    {numbers[7]}   |    {numbers[8]}   |\n" 
            + "|        |        |        |\n" 
            + "---------------------------\n"
        );
    var command = Console.ReadLine();
    if (command == "move right")
    {
        numbers[1] = 0;
        numbers[0] = 1;
    }
}

