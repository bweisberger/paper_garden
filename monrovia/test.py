f = open('page_links.txt', 'r')
url_list = []
for l in f:
    # print(l[8])
    # print(l)
    # l.rstrip()
    url_list.append(l.rstrip())
    
f.close()
print(url_list[26])