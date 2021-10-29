default port is : 27017

command `mongod` will start the server 
command `mongo` will open the mongo db shell if server be running

note : you can run `mongod —port [custom port]` and `mongo —port [custom port]` for run on specific port
note : you can add `--dbpath` and `--logpath` to change default db path and log path :)


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