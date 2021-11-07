default port is : 27017

command `mongod` will start the server 
command `mongo` will open the mongo db shell if server be running

* you can run `mongod —port [custom port]` and `mongo —port [custom port]` for run on specific port
* you can add `--dbpath` and `--logpath` to change default db path and log path :)


default path on Apple M1 Processor: 
configuration file: `/opt/homebrew/etc/mongod.conf`
log directory: `/opt/homebrew/var/log/mongodb`
data directory: `/opt/homebrew/var/mongodb`
// more information on : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

run server as a macOS service : brew services start mongodb-community@5.0
stop server : brew services stop mongodb-community@5.0

run server manually as a background process : mongod --config /opt/homebrew/etc/mongod.conf --fork
you can shutdown mongo server with command in mongo shell

more information about configuration file : https://docs.mongodb.com/manual/reference/configuration-options/

check if mongo db runninig as a macOS service: `brew services list`
check if mongo db runninig manually as a background process: `ps aux | grep -v grep | grep mongod`

You can also view the log file to see the current status of your mongod process: `/usr/local/var/log/mongodb/mongo.log`

run `mongosh` in terminal to run mongosh
command `mongotop` will log the usage every second

you can create a cfg (config) file , manipulate and rin with `mongod --config [cfg path] or -f [cfg path]`

 ### --- in db shell :

 `db.help()` give all available commands
 `show dbs` list of dbs in this mongo server
 `use [db name]` will checkout (create if not exist) db
 `db.dropDatabase()` will delete db

 -----
 `db.users.help()` show all available commands
 `db.users.find()` show the all data s of user collection
 `db.users.find().pretty()` show the all data s of user collection in formatted form
 #CRUD `db.users.insertOne({name: "my name"})` will create users collection if not exist and one document in it
 `show collections` show all collections
 `db.users.drop()` will delete the users collection

 #CRUD `db.users.insertMany([{name: "my name"}, {name: "your name"}])` will create users collection if not exist and some documents in it

 `db.users.findOne()` returns the first record in collection
 `db.users.findOne({name: "your name"})` returns the record with special property in collection
 * `insertOne()` dose not accept `.pretty()`

#CRUD `db.users.updateOne([target], [{[operator]: [new value]}, [options]])`
ex: `db.users.updateOne({name: "my name"}, {$set: {lastName: "my last name"}})`
* it can be a new property of field to create it or existed property to update it

#CRUD `db.users.updateMany([target], [{[operator]: [new value]}, [options]])`
ex: `db.users.updateMany({age: 25}, {$set: {isAdult: true}})`

#CRUD `db.users.update({id: 5}, {gender: "male"})` it will override second object to an object with first parameter properties completely! it can be dangerous because the other properties will remove.

#CRUD `db.users.replaceOne({id: 5}, {gender: "male"})` it will override second object to an object with first parameter properties completely! it can be dangerous because the other properties will remove.

#CRUD `db.users.deleteOne({id: 5})` delete item with id 5
#CRUD `db.users.deleteMany({age: 20})` delete all users with age 20
#CRUD `db.users.deleteMany({})` delete all users

mongo compass = a G-ui for mongo db
to connect running mongo service can use : `mongodb://[ip / localhost]:[port]`

* `projection` is columns that you want to return when select from your db
 for example if you inter `{firstName : 1, lastName : 1}` you only get `_id`, `firstName` and `lastName` in your select
 and if you enter `{_id: 0 ,firstName : 1, lastName : 1}` you only get `firstName` and `lastName` in your select

* projection in shell is the second parameter of `.find()` function . for example :
  `db.users.find({},{firstName: 1})`

* ‍‍`skip` in db will ignore records from index 0 into index the skip value that you passed
* ‍‍`limit` will count records and return records from index 0 into the value that you passed tou your limit parameter
* `sort` will sort your data base of value that you pass to your field . for example `{age: 1}` will sort data by field age in 
  Ascending format and  `{age: -1}` will sort data by field age in Descending format

-- you can use all of options in shell like this : `db.users.find({}, {age: 1}).sort({age: 1}).limit(1).pretty()`

aggregations in mongo db are similar to where conditions in SQL
for example : `db.users.find({ $and : [ { age: 25 } ]}, {age: 1})` means records with age 25

or queries like this :

db.getCollection("users").aggregate([
    {
        $match : {age: { $in : [ 23, 25]}} // this is where clause
    },
    {
        $project : {firstName: 1, lastName: 1, age: 1} // this is projection
    },
    {
        $sort {age: 1} 
    },
    {
        $limit: 3
    },
    {
        $skip: 1
    }
])



$match should write before other aggregations