module.exports = [    
   
      {
          type: "input",
          name: "username",
          message: "Enter ur firstname...",
          validate: answers => {
              if(answers.length < 1) return "Please Enter ur First Name";
              return true;
          }
      },
      {
          type: "password",
          name: "password",
          message: "Enter ur lastname...",
          validate: answers => {
              if(answers.length < 1) return "Please Enter ur Last Name";
              return true;
          }
      }

  ];