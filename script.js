function request() {
   const mail = 'admin@test.io';
   const pass = 'admin1234';
   const userMail = prompt('enter mail');
   if (userMail === mail) {
      const userPass = prompt('enter password')
      if (userPass !== pass) {
         alert('incorrect password');
      } else {
         alert('Welcome');
      }
   } else {
      alert('incorrect mail, try again');
   }
}