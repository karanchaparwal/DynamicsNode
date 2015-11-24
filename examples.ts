import {CRMClient}  from "./CRM/CRMClient";
import {DataTable}  from "./Data/DataTable";
import {Guid}  from "./CRM/Guid";


var crm = new CRMClient("default");
//var crm = new CRMClient({url:"http://myserver.com", userName:"test", password:"test"});

console.log(process.env["EDGE_CS_DEBUG"]);
process.env["EDGE_CS_DEBUG"] = 1;

var who = crm.WhoAmI();
console.log(who);

var myUser = crm.retrieve("systemuser",new Guid(who),true);
console.log(myUser);

var account1 = crm.retrieve("account",new Guid("4C1ECDF4-633B-E211-9EB5-0050568A69E2"),["accountid","name","ownerid","createdon"]);
console.log(account1);

var account2 = crm.retrieve("account",new Guid("4C1ECDF4-633B-E211-9EB5-0050568A69E2"),true);
console.log(account2);


/*
crm.create("account",{name:"test"});
var guid = crm.create("account",[{name:"account1"},{name:"account2"}]);


for(var i=0;i<10;i++){
  crm.create("account",{name:"account"+i});
}

var accounts = DataTable.load("accounts.xml");
crm.create("account",accounts);

var contacts = DataTable.load("contacts.xml");

// Perform some transformations before insert
contacts.lookup("accountid", row => crm.retrieve("account",new Guid(row.accountid)));

crm.create("contacts",contacts);

crm.fetchAll("accounts").save("accounts.xml");
crm.fetchAll("accounts").save("accounts.json");

crm.update("account",{accountid:"2ad7a34f-11db-4910-8f1c-397b1352f0e3",name:"updated"});
crm.update("account",{name:{like:"%test%"}},{name:"updated"});
*/