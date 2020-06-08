# K-Means-Clustering-Visualisation
## Background
The K-Means Clustering is a unsuperverised machine learning algorithm. It is used to group similar data points together and discover undelying patterns. K-Means looks for a fixed number of clusters (define by K) to do so.

## How it Works
We would first need to pick the number of centroids (or clusters) to form. This is determined by what K value you want. This K value can be found by running tests through multiple different numbers of K and looking for what is known as the elbow in the elbow method:
![alt text](https://i.stack.imgur.com/otjtH.png "Elbow Method")
Once the K value has been found they will be placed on the graph depending on where the seeding method. Seeding methods vary, you can have random locations on the graph or place them in locations which make the result more accurate. Depending on the seeding method, the centroids will then look at which data points are closest to them. After, they will move to the centre on those data points and again look to see which data points are closest. This will be done until the centroids no longer move and we have our clusters.

## How it will be Developed
### First Stage:
To begin with we will begin by implementing K-means into a simple python program and seeing the results. To do this we will use the Panda Library.

### Second Stage:
Begin to Implement as a Web Application. Technologies have not yet been confirmed and this will be updated in due course.

### Third Stage:
Once K-Means has been implemtented we plan on adding other algorithsm to visualise.
