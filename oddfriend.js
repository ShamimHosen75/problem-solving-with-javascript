// Solved The Problem Find The Perfect Friend.

function oddFriend(allFriends) { // Here I Declare oddFriend function.
    let lastFriend = allFriends[allFriends.length - 1];
    for(let friend of allFriends){ // Declare for of loop for each element of an Array.
        
        if(typeof(friend) != "string"){ // condition for Invalid string.
            return "You are input an Invalid string, Pls Enter a string";
        }
        else {
            for (let i = 1; i < 20; i += 2) {
                if(friend.length == i){ // condition for find the perfect friend.,,,
                    return friend;
                    break;
                }
                else {
                    if (friend == lastFriend && i <= lastFriend.length) {
                        return 'There are no odd friends here';
                        break;
                    }
                    else {
                        continue; // if any condition was not match loop will skip the element.,,,
                    }
                }
            }
        }
    }
}

// Array of All of My Friend.
let myFriendList = ["Amin", "Shuvon", 'Duha',"Riyad", "Sourov","RomanAhmed"];

let showOddFriend = oddFriend(myFriendList); // Call the function oddFriend in a variable.
console.log(showOddFriend); // for see the result console log it.