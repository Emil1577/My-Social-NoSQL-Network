# My-Social-NoSQL-Network

## Decription

My-Social-NoSQL-Network is a Challenge 18 with the use of NoSQL.  The application allows you to add, delete, update, view a single and entire user.  It also gives you an option to add and remove a friend of the user.  A user can also create, delete and edit view a single or entire thoughts.  With each thought auser can also add a reaction and remove a reaction of each thought.  When a user is deleted, the thought will also be deleted.


Here are the links for the video of my project and the GitHub Repository. 

(https://drive.google.com/file/d/1W98yKse8Qc8JZXKdk6RWtXQE9lbykRVq/view)

https://github.com/Emil1577/My-Social-NoSQL-Network


## Installation Instructions

You'll need an Insomia to run the program.  Then clone my repository. Go to [https://github.com/Emil1577/MyDreamTeam](https://github.com/Emil1577/My-Social-NoSQL-Network). Then run your terminal on the folder of the cloned repository.  You'll also need to install the npm by writing "npm install'.   After which is you are ready to use the application. 

## Table Of Contents

1. [Webpage Screenshot](#webpage-screenshots)
2. [Code Snippets](#code-snippets)
3. [How to use:](#how-to-use)
4. [My Contact Information](#my-contact-information)

## Webpage Screenshots:

![Screen Shot 2023-02-26 at 7 30 38 PM](https://user-images.githubusercontent.com/119825000/221466440-355e4498-e1bb-4034-aa3a-8d2645467e32.png)

![Screen Shot 2023-02-26 at 7 30 48 PM](https://user-images.githubusercontent.com/119825000/221466431-52e782cc-ba9b-4f5a-8ae3-c3cd858b5240.png)

![Screen Shot 2023-02-26 at 7 36 39 PM](https://user-images.githubusercontent.com/119825000/221467166-c231a6b5-4622-4f40-8625-d7c6c259de93.png)


## Code Snippets: 
    
### Sample Getter function

    // Get all users
    getUsers(req, res) {
      User.find({})
        .populate({ path: 'thoughts', select: '-__v' }) //'thoughts' is from the user.thoughts this goes the same with friends below.
        .populate({ path: 'friends', select: '-__v' })
        .then(users => res.json(users))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    },

    // Get a single user
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },


### Function for multiple choiecs if the manager wish to add employees or not, and what position of the employee.

    function addEmployee() {

        var roleList = [];
        var managerList = [];

        db.query('SELECT * FROM roles;', function (err, data) {
            //     console.table(data);
            for (let i = 0; i < data.length; i++) {
                roleList.push(data[i].title);
            }
        });

        //console.log(roleList);

        db.query('SELECT * FROM manager;', function (err, data) {

            for (let i = 0; i < data.length; i++) {
                managerList.push(data[i].manager_name);
            }

        });

## Sample Setter

    // create a new user
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

   // updating user
    updateUser(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      )

        .then((user) => {
          if (!user) {
            res.status(404).json({ message: "No user found with this id!" });
            return;
          }
          res.json(user);
        })
        .catch((err) => res.json(err));
    },

      
## How to use:

After completing the installation instruction, then on your terminal type in "npm start".  After which when it says "running on port http://locahost:3001!", open your Insomia then run the following in Insomia.


* `THEN the data for each of these routes is displayed in a formatted JSON`
* `WHEN I test API POST, PUT, and DELETE routes in Insomnia`
* `THEN I am able to successfully create, update, and delete users and thoughts in my database`
* `WHEN I test API POST and DELETE routes in Insomnia`
* `THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list`


## My Contact Information:

* [My LinkedIn](https://www.linkedin.com/in/emil-ronquillo-76832a32/)
* [My Github](https://github.com/Emil1577)
* [My Email](mailto:emilronquillo@gmail.com)

## Thank you for stopping by. 

Special thanks to all my Instructor, tutors and my colleagues
