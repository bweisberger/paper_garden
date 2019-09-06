#Welcome to Paper Garden!
This app is meant as tool for landscape architecture, or to design a garden. The home page features an opportunity for you to log in, or you can go ahead and start a new garden design by clicking the "Start a Garden" button. 

Goals for tomorrow, September 7, 2019

GardenGrid has a project in its state. A project has a name, a username, dimensions ({x, y}), and plants associated with it. 

Plants should be objects, stored in an array. plant = {cx, cy, name, size} 
  [cx and cy because plants are svg circles, which take cx and cy as their center coords]

Size of plants in a garden should be inversely proportional to the area of the garden. (size/x*y)

There might be some constant used to adjust plant size.

When projects are rendered, state is used to determine where plants go:
  If smartsquare position (x, y) are == plant position (cx, cy), plant is drawn there.
