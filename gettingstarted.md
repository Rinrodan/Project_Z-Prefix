# Getting Started


- [Front End](#front-end)
    - [Github](#github)
    - [Express](#express)
- [Back End](#back-end)
    - [Postgres](#postgresql)
    - [Knex](#knex)

[Back to the Repo](https://github.com/Rinrodan/Project_Z-Prefix/tree/main)


## Step by step

### FRONT END

#### Github

```bash
git clone git@github.com:Rinrodan/Project_Z-Prefix.git
```
```bash
cd Project_Z-Prefix
```
```bash
cd front-end
```
```bash
npm install
```
---




### BACK END

#### Express Server

```bash
npm install express
```

|   |   |   |
|---|---|---|
|install express pg knex|create/update app.js|package.json “start”; “node app.json”|

---
#### PostgresQL

```bash
npm install pg pg-promise
```
|   |   |   |   |   |
|---|---|---|---|---|
|sudo -u postgres psql|\list|# CREATE DATABASE dbname|\c dbname|\dt|

---

#### Knex

|   |   |   |   |   |
|---|---|---|---|---|
|npx knex migrate:make create_inventory_table    |  knex migrate:latest  |  knex migrate:rollback   |  knex migrate:up 001_migration_name.js   |  knex migrate:down 001_migration_name.js  | knex migrate:list | |  knex seed:make seed_name  | seed:run |  knex seed:run --specific=seed-filename.js –specific=another-seed-filename.js  |      alter user postgres with password 'postgres';   inventory-# TABLE tablename; |



---
### [Back to the Repo](https://github.com/Rinrodan/Project_Z-Prefix/tree/main)
