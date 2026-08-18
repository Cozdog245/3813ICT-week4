const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

class User {
  constructor(username, birthdate, age, email, password) {
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
    this.valid = false; // default — gets set true only on a successful login check
  }
}

const users = [
  new User("corey", "2000-01-01", 25, "corey@email.com", "password123"),
  new User("alex", "1998-05-12", 27, "alex@email.com", "letmein"),
  new User("sam", "2001-11-30", 24, "sam@email.com", "hunter2")
];

app.use(express.json()); // lets Express read JSON from request bodies

app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;

  const foundUser = users.find(user => user.email === email)

    if (!foundUser){
      res.json({valid: false})
      return
    }
    if (foundUser.password != password){
      res.json({valid: false})
      return
    }

    res.json({
        username: foundUser.username,
        birthdate: foundUser.birthdate,
        age: foundUser.age,
        email: foundUser.email,
        valid: true
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
