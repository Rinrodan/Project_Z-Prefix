# Getting Started


- [Front End](#front-end)
    - [Github](#github)
    - [Express](#express)
- [Back End](#back-end)
    - [Postgres](#postgresql)
    - [Knex](#knex)

[Back to the Repo](https://github.com/Rinrodan/Project_Z-Prefix/tree/main)


## Step by step
#### Github

```bash
git clone git@github.com:Rinrodan/Project_Z-Prefix.git
```
```bash
cd Project_Z-Prefix
```
```bash
cd back-end
```
```bash
npm install
```
```bash
npm start
```
Open up [](http://localhost:8080/)
---

### BACK END

#### PostgresQL
install PgAdmin
![https://www.pgadmin.org/videos/](https://www.pgadmin.org/download/)

```bash
cd back-end
```

and follow these video tutorials 
## [](https://www.pgadmin.org/videos/)

``bash
npm install pg pg-promise
```

use this sql file in PGadmin desktop app to create the two tables

> back-end/public/Postgres_Create_Tables.sql


|   |   |   |   |   |
|---|---|---|---|---|
|sudo -u postgres psql|\list|# CREATE DATABASE dbname|\c dbname|\dt|

---

#### Express Server

```bash
npm install express
```

|   |   |   |
|---|---|---|
|install express pg knex|create/update app.js|package.json “start”; “node app.json”|

---

### FRONT END

```bash
cd front-end
```
```bash
npm install
```
```bash
npm start
```
---







#### Knex

|   |   |   |   |   |
|---|---|---|---|---|
|npx knex migrate:make create_inventory_table    |  knex migrate:latest  |  knex migrate:rollback   |  knex migrate:up 001_migration_name.js   |  knex migrate:down 001_migration_name.js  | knex migrate:list | |  knex seed:make seed_name  | seed:run |  knex seed:run --specific=seed-filename.js –specific=another-seed-filename.js  |      alter user postgres with password 'postgres';   inventory-# TABLE tablename; |



---
### [Back to the Repo](https://github.com/Rinrodan/Project_Z-Prefix/tree/main)
