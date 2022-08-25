const RandExp = require('randexp');

export function emailGenerator(){
   return new RandExp(/^[a-z0-9._+-]{1,20}@[a-z0-9]{3,15}\.[a-z]{2,4}$/).gen()
}


export function passwordGenerator() {
   return new RandExp(/^[-+]?[0-9]{0,16}(\.[0-9]{1,6})?$/).gen()
}