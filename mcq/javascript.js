function personalbar(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
const member = new personalbar("Lydia", "hallie")
personalbar.getFullName = function(){
    return '${this.fistName'
}