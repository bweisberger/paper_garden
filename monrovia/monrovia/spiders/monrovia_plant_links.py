# -*- coding: utf-8 -*-
import scrapy
from monrovia.items import MonroviaPlantLinksItem


class MonroviaPlantLinksSpider(scrapy.Spider):
    name = 'monrovia_plant_links'
    allowed_domains = ['monrovia.com']
    start_urls = ['https://www.monrovia.com/plant-catalog/search/?start_page=1&cold_zone=2,3,4,5,6,7,8,9']
    
    def parse(self, response):
        for x in range(429):
            new_page = "?start_page="+str(x+1)+"&cold_zone=2,3,4,5,6,7,8,9"
            url = response.urljoin(new_page)
            print('sending ' + url + 'to parse_page_links')
            yield scrapy.Request(url, callback = self.parse_page_links)

    def parse_page_links(self, response):
        print('processing: '+ response.url)
        page_urls = response.xpath('//div[@class="image-wrap"]/a/@href').extract()
        image_urls = response.xpath('//div[@class="image-wrap"]/a/img/@src').extract()
        plant_urls = zip(page_urls, image_urls)

        for plant in plant_urls:
            plant_info = {
            'plant_page': plant[0],
            'plant_image': plant[1]
            }
            yield plant_info
        
        
