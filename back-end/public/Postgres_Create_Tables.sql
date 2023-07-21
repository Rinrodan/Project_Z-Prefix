-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.items
(
    id integer NOT NULL,
    user_id integer NOT NULL,
    item_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description character varying(255) COLLATE pg_catalog."default" NOT NULL,
    quantity integer,
    CONSTRAINT items_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.knex_migrations
(
    id integer NOT NULL DEFAULT nextval('knex_migrations_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    batch integer,
    migration_time timestamp with time zone,
    CONSTRAINT knex_migrations_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.knex_migrations_lock
(
    index integer NOT NULL DEFAULT nextval('knex_migrations_lock_index_seq'::regclass),
    is_locked integer,
    CONSTRAINT knex_migrations_lock_pkey PRIMARY KEY (index)
);

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL,
    first_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    user_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.items
    ADD CONSTRAINT user_id FOREIGN KEY (user_id)
    REFERENCES public.users (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;