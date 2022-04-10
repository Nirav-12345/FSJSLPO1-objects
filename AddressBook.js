
class AdressBook
{
Name;
address;
state;
city;
zip;
phoneNumber;
Email;

//constructor
constructor(Name ,address,city,state,zip,phoneNumber,Email)
{
    this.Name=Name;
    
    this.address=address;
    this.city=city;
    this.state=state;
    this.zip=zip;
    this.phoneNumber=phoneNumber;
    this.Email=Email;

}

get Name(){return this._Name;}
set Name(Name)
{
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{3}$');
    if(nameRegex.test())
    this._Name=Name;
    else throw 'Name is incorrect';
}


toString()
{
 return "Name = "+this.Name+" , address = "+this.address+", City="+this.city+",state="+this.state+",zip="+this.zip+",phoneNumber="+this.phoneNumber+",Email="+this.Email;
}
}







 let adressBook=new AdressBook("Mar","fdfx","asans","wesl.com","454554","5656","oo@gmail.com");

console.log(adressBook.toString());

try{
    adressBook.Name="gg";
console.log(adressBook.toString());
}catch(e)
{
console.error(e)
}