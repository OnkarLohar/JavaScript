const accountId = 12345
let accountEmail = "omkar@google.coom"
var accountPassword = "91120"
accountCity = "Mumbai"
let accountState;

// accountId = 2

accountEmail = "sahil@google.com"
accountPassword = "4444"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var.
Because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])