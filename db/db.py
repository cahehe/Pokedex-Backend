import psycopg2

# connect = psycopg2.connect(
#     host="localhost",
#     database="pokedex",
#     user="carloshehe",
#     password="abcabc",
#     port = 5432
# )

def postgres():
    confg = 'host = localhost dbname = pokedex user = carloshehe password = abcabc port = 5432'
    connect = psycopg2.connect(confg)    
    return connect
    # cur.execute("""Select * from alldata;""")
    # print(cur.fetchone())