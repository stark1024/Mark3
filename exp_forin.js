var friends = new Object();
friends.bill = {
    firstName: "Bill",
    lastName: "Clinton",
    number: 6,
    address: ['White', 'House']
};
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: 1,
    address: ['Heaven', '101']
};
var list = function (object){
    for(var key in object){
        console.log(key);   
    }
}
//this will list all the properties of object we enter into the function, as an arguement
//here this will print bill and steve (no caps.....right!)
list(friends);
