## Run everything together

Run `docker-compose up`

## Run projects separeted

### Run the mysql-db

`npm run start:db` or
`docker-compose up mysql-db`

After starting the mysql container you can run queries in the bash.
In order to open the bash run the following command or goto the "Exec" tab in the docker dekstop under mysql-db container.
`docker exec -it mysql-db /bin/bash`
Then run this command `mysql -uroot -p -A` and enter the password. Then you are prompted to MySQL monitor.
Now you can run mysql queries here for example run the following command.
`select user, host from mysql.user;`
`select * from DOCKERIZED.transactions;`

### Run the nestjs-app

`npm run start:back` or  
`docker-compose up nestjs-app`

### Run the nextjs-app

`npm run start:front` or  
`docker-compose up nextjs-app`

### Clean the database volume

Run `npm run clean` or `docker-compose down -v`
