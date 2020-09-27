--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.visits DROP CONSTRAINT IF EXISTS visits_fk0;
ALTER TABLE IF EXISTS ONLY public."visitResults" DROP CONSTRAINT IF EXISTS "visitResults_fk1";
ALTER TABLE IF EXISTS ONLY public."visitResults" DROP CONSTRAINT IF EXISTS "visitResults_fk0";
ALTER TABLE IF EXISTS ONLY public.partners DROP CONSTRAINT IF EXISTS partners_fk0;
ALTER TABLE IF EXISTS ONLY public.visits DROP CONSTRAINT IF EXISTS visits_pk;
ALTER TABLE IF EXISTS ONLY public.users DROP CONSTRAINT IF EXISTS users_pk;
ALTER TABLE IF EXISTS ONLY public.partners DROP CONSTRAINT IF EXISTS partners_pk;
ALTER TABLE IF EXISTS ONLY public.diseases DROP CONSTRAINT IF EXISTS diseases_pk;
ALTER TABLE IF EXISTS public.visits ALTER COLUMN "visitId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.users ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.partners ALTER COLUMN "partnerId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.diseases ALTER COLUMN "diseaseId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."visits_visitId_seq";
DROP TABLE IF EXISTS public.visits;
DROP TABLE IF EXISTS public."visitResults";
DROP SEQUENCE IF EXISTS public."users_userId_seq";
DROP TABLE IF EXISTS public.users;
DROP SEQUENCE IF EXISTS public."partners_partnerId_seq";
DROP TABLE IF EXISTS public.partners;
DROP SEQUENCE IF EXISTS public."diseases_diseaseId_seq";
DROP TABLE IF EXISTS public.diseases;
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: diseases; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.diseases (
    "diseaseId" integer NOT NULL,
    name text NOT NULL,
    description text
);


--
-- Name: diseases_diseaseId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."diseases_diseaseId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: diseases_diseaseId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."diseases_diseaseId_seq" OWNED BY public.diseases."diseaseId";


--
-- Name: partners; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.partners (
    "partnerId" integer NOT NULL,
    "userId" integer NOT NULL,
    date date NOT NULL,
    city text,
    state text,
    name text NOT NULL,
    note text,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: partners_partnerId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."partners_partnerId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: partners_partnerId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."partners_partnerId_seq" OWNED BY public.partners."partnerId";


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    "userId" integer NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: users_userId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."users_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."users_userId_seq" OWNED BY public.users."userId";


--
-- Name: visitResults; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."visitResults" (
    "visitId" integer NOT NULL,
    "diseaseId" integer NOT NULL,
    result boolean NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: visits; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.visits (
    "visitId" integer NOT NULL,
    "userId" integer NOT NULL,
    date date NOT NULL,
    city text,
    state text,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: visits_visitId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."visits_visitId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: visits_visitId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."visits_visitId_seq" OWNED BY public.visits."visitId";


--
-- Name: diseases diseaseId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.diseases ALTER COLUMN "diseaseId" SET DEFAULT nextval('public."diseases_diseaseId_seq"'::regclass);


--
-- Name: partners partnerId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners ALTER COLUMN "partnerId" SET DEFAULT nextval('public."partners_partnerId_seq"'::regclass);


--
-- Name: users userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN "userId" SET DEFAULT nextval('public."users_userId_seq"'::regclass);


--
-- Name: visits visitId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits ALTER COLUMN "visitId" SET DEFAULT nextval('public."visits_visitId_seq"'::regclass);


--
-- Data for Name: diseases; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.diseases ("diseaseId", name, description) FROM stdin;
1	chlamydia	Add later
2	gonorrhea	Add later
3	hepatitis	Add later
4	herpes	Add later
5	hiv	Add later
6	hpv	Add later
7	syphilis	Add later
\.


--
-- Data for Name: partners; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.partners ("partnerId", "userId", date, city, state, name, note, "createdAt") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users ("userId", "firstName", "lastName", email, password, "createdAt") FROM stdin;
5	Scott	Brett	scott@brett.com	password	2020-09-22 01:12:58.066098+00
\.


--
-- Data for Name: visitResults; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."visitResults" ("visitId", "diseaseId", result, "createdAt") FROM stdin;
\.


--
-- Data for Name: visits; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.visits ("visitId", "userId", date, city, state, "createdAt") FROM stdin;
\.


--
-- Name: diseases_diseaseId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."diseases_diseaseId_seq"', 7, true);


--
-- Name: partners_partnerId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."partners_partnerId_seq"', 12, true);


--
-- Name: users_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."users_userId_seq"', 6, true);


--
-- Name: visits_visitId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."visits_visitId_seq"', 18, true);


--
-- Name: diseases diseases_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.diseases
    ADD CONSTRAINT diseases_pk PRIMARY KEY ("diseaseId");


--
-- Name: partners partners_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_pk PRIMARY KEY ("partnerId");


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY ("userId");


--
-- Name: visits visits_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_pk PRIMARY KEY ("visitId");


--
-- Name: partners partners_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_fk0 FOREIGN KEY ("userId") REFERENCES public.users("userId");


--
-- Name: visitResults visitResults_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."visitResults"
    ADD CONSTRAINT "visitResults_fk0" FOREIGN KEY ("visitId") REFERENCES public.visits("visitId");


--
-- Name: visitResults visitResults_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."visitResults"
    ADD CONSTRAINT "visitResults_fk1" FOREIGN KEY ("diseaseId") REFERENCES public.diseases("diseaseId");


--
-- Name: visits visits_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_fk0 FOREIGN KEY ("userId") REFERENCES public.users("userId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

