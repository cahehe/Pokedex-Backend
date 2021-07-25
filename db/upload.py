import requests,os, cloudinary.uploader
from db import * 


cloudinary.config(
    cloud_name = 'dhsiicpyj',
    api_key = '511866658577527',
    api_secret = 'RKlKLolO60IfALf41Tgq7JY91nQ'
)
# r = cloudinary.uploader.upload('/Users/carloshehe/Desktop/coco.jpg', use_filename = True, unique_filename = False)
# print(r['secure_url'])


con = postgres()
connection = con.cursor()
# connection.execute("SELECT * FROM images;")
# print(connection.fetchone())

image_dir = '/Users/carloshehe/Desktop/images'
not_inserted = 0
for image in os.listdir(image_dir):
    basename = image.split('.')[0]        
    print("Basename :{}".format(basename))
    #not fully working since some names don't match e.g - Meowstic Male, Wishiwashi
    try:
        r = cloudinary.uploader.upload(image_dir + '/' +  image, use_filename = True, unique_filename = False)   
        query =  "insert into images values('" + basename + "','" + r['secure_url'] + "');"
        connection.execute(query)
        con.commit()
        # r = cloudinary.uploader.upload(image_dir + '/' +  image, use_filename = True, unique_filename = False)    
        # connection.execute("insert into images values('" + "Bulbasaur" + "','" + r['secure_url'] + "');")
    except Exception as err:        
        not_inserted += 1        
        print(err)
        con.rollback() # we need to roll back if there was an error or the next query wont work
        print("Could not insert {} not_inserted:{}\n\n".format(basename, not_inserted))        
    

    
    


