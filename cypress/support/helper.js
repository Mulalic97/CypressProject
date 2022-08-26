const RandExp = require('randexp');

export function emailGenerator(){
   return new RandExp(/^[a-z0-9]{1,20}@mailinator\.com$/).gen()
}


export function passwordGenerator() {
   return new RandExp(/^[a-zA-Z0-9_/!@#$%^&*()+={}><.,~`?"':;]{16}$/gi).gen()
}