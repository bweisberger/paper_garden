import json
import pandas as pd
import ast
# data_frame = pd.read_csv('monrovia.csv', sep = ':') 

# data_frame
# print(data_frame[0])

# google: string to dict python3 returned json.loads()
# pandas to read csv


f1 = open('monrovia.csv', 'r')
f2 = open('page_links.txt', 'a+')
for l in f1:
    try: 
        # print(l, "l on line 15")
        obj = ast.literal_eval(l)
        if obj[0]['plant_page'][8] == 'w':
            f2.write(obj[0]['plant_page']+'\n')
    except:
        pass
f1.close()
f2.close()
    # json_obj = json.loads(l)
    # print(type(json_obj))
    # print(json_obj)
