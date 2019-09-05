# -*- coding: utf-8 -*-
import scrapy
from items import MonroviaPlantLinksItem

f = open('page_links.txt', 'r')
url_list = []
for l in f:
    # print(l)
    # l.rstrip()
    url_list.append(l.rstrip())
    
f.close()
class PlantInfoSpider(scrapy.Spider):
    name = 'plant_info'
    allowed_domains = ['monrovia.com']
    start_urls = url_list[:3]

    def parse(self, response):
        item = MonroviaPlantLinksItem()
        item['name'] = response.xpath('//h1[@class="page-title"]/text()').extract_first()
        item['description'] = response.xpath('//div[@class="plant-main-right"]/div/p/text()').extract_first()
        item['url'] =
        item['kind'] =
        item['image'] =
        item['sun'] = response.xpath('//li//div[@class="data"]//a/text()').extract_first()
        item['zones'] = response.xpath('//li//div[@class="zone-data"]/a/text()').extract_first()
        item['water'] = response.xpath('//li//div[@class="data"]/text()').extract()[1]
        item['color'] =
        item['height'] =
        item['width'] = 
        pass
