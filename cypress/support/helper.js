
export function emailGenerator(){
   let email ="";
   let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
   let length = 8;
   for(let i =0; i<=length; i++){
      email += chars[Math.floor(Math.random() * chars.length)];
   }
   return email + '@mailinator.com';
}

export function passwordGenerator() {
   let length = 8,
       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
       password = "";
   for (let i = 0, n = charset.length; i < length; ++i) {
      password+= charset.charAt(Math.floor(Math.random() * n));
   }
   return password;
}