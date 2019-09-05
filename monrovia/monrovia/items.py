# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class MonroviaPlantLinksItem(scrapy.Item):
    name = scrapy.Field()
    description = scrapy.Field()
    height = scrapy.Field()
    width = scrapy.Field()
    sun = scrapy.Field()
    water = scrapy.Field()
    color = scrapy.Field()
    url = scrapy.Field()
    image = scrapy.Field()
    zones = scrapy.Field()
    kind = scrapy.Field()
    last_updated = scrapy.Field(serializer=str)
    pass
