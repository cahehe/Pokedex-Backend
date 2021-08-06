import psycopg2

def postgres():    
    confg = 'dbname=drdf2a9fuogo2 host=ec2-52-0-67-144.compute-1.amazonaws.com port=5432 user=irfppesxyddqtp password=04b863cb25ea01d6152228daffd4b78876b8c4ddc5ccfdd300a13b237ea3e2ec sslmode=require'
    connect = psycopg2.connect(confg)    
    return connect
    # cur.execute("""Select * from alldata;""")
    # print(cur.fetchone())