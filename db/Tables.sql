
--since we're not using all columns, we can insert all columns into a temp table 
--then copy the columns we want into other tables
CREATE TABLE AllData (
    index SERIAL,
    pokedex_number INT,
    name VARCHAR(50),
    german_name VARCHAR(50),
    japanese_name VARCHAR(50),
    generation SMALLINT,
    status VARCHAR(50),
    species VARCHAR(50),
    type_number smallint,
    type_1 VARCHAR(50),
    type_2 VARCHAR(50),
    height_m REAL,
    weight_kg REAL,
    abilities_number SMALLINT,
    ability_1 VARCHAR(50),
    ability_2 VARCHAR(50),
    ability_hidden VARCHAR(50),
    total_points INT,
    hp INT,
    attack INT,
    defense INT,
    sp_attack INT,
    sp_defense INT,
    speed INT,
    catch_rate INT,
    base_friendship INT,
    base_experience INT,
    growth_rate VARCHAR(50),
    egg_type_number SMALLINT,
    egg_type_1 VARCHAR(50),
    egg_type_2 VARCHAR(50),
    percentage_male REAL,
    egg_cycles INT,
    against_normal REAL,
    against_fire REAL,
    against_water REAL,
    against_electric REAL,
    against_grass REAL,
    against_ice REAL,
    against_fight REAL,
    against_poison REAL,
    against_ground REAL,
    against_flying REAL,
    against_psychic REAL,
    against_bug REAL,
    against_rock REAL,
    against_ghost REAL,
    against_dragon REAL,
    against_dark REAL,
    against_steel REAL,
    against_fairy REAL
);



CREATE TABLE General(
    pokedex_number INT,
    name VARCHAR(50),
    species VARCHAR(50),
    type_1 VARCHAR(50),
    type_2 VARCHAR(50),
    PRIMARY KEY(name)
);

/*
Insert data from CSV
use header option to ignore the first row 
*/
COPY AllData
FROM '/Users/carloshehe/Desktop/github/Pokedex/db/data.csv' CSV HEADER;

--now insert appropriate rows into general
INSERT INTO General
SELECT pokedex_number, name, species, type_1, type_2 FROM AllData;


/*
CREATE TABLE BasicStats(
    id SERIAL,
    abilities_number SMALLINT,
    ability_1 VARCHAR(50),
    ability_2 VARCHAR(50),
    ability_hidden VARCHAR(50),    
    catch_rate INT,
    base_friendship INT,
    base_experience INT,
    growth_rate VARCHAR(50),
    egg_type_number SMALLINT,
    egg_type_1 VARCHAR(50),
    egg_type_2 VARCHAR(50),
    percentage_male REAL,
    egg_cycles INT,
    FOREIGN KEY(ID) REFERENCES general(ID)
)

CREATE TABLE ExtraStats(
    height_m REAL,
    weight_kg REAL,
    total_points INT,
    hp INT,
    attack INT,
    defense INT,
    sp_attack INT,
    sp_defense INT,
    speed INT,
)
*/