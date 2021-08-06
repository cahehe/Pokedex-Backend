import psycopg2, json

file = open('../node/config.json')

credentials = json.load(file)

def postgres():    
    confg = credentials["heroku"]["CONNECTION_STR"]
    connect = psycopg2.connect(confg)    
    return connect
    # cur.execute("""Select * from alldata;""")
    # print(cur.fetchone())