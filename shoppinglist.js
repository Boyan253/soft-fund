function shopping (command){



    while(command != "Go Shopping!") {

        if(command.contains("Urgent"))  {
            command = command.replace("Urgent", "");
            command = command.trim();
            urgent.push(command);
            console.log("Urgent: " + command);
        } else if (command.contains ("Unnecessary "))   {
            command = command.replace("Unnecessary ", "");
            command = command.trim();
            unnecessary.pop(command);
            console.log("Unnecessary: " + command);
        }else if (command.contains ("Correct"))    {
            command = command.replace("Correct", "");
            command = command.trim();
            correct.push(command);
            console.log("Correct: " + command);
        } else if(command.contains ("Rearrange" )) {
            command = command.replace("Rearrange", "");
            command = command.trim();
            rearrange.push(command);
            console.log("Rearrange: " + command);
        }

        
    } console.log("Urgent: " + urgent.join(", "));
} shopping(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
