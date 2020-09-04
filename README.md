# K-Means-Clustering-Visualisation
## Introduction
The K-Means Clustering is an unsupervised machine learning algorithm. It is used to group similar data points together and discover underlying patterns. K-Means looks for a fixed number of clusters (define by K) to do so. In order to find the suitable number of clusters to form you need to determine what K Value you want. To do this you will need to run tests through multiple numbers and look for what is known as the elbow method. Once the K value has been found they will be placed on the graph depending on where the seeding method. Seeding methods vary, you can have random locations on the graph or place them in locations which make the result more accurate. Depending on the seeding method, the centroids will then look at which data points are closest to them. After, they will move to the centre on those data points and again look to see which data points are closest. This will be done until the centroids no longer move, and we have our clusters.

There are limitations to K means for example having to manually choose the value of k; having clustering outliers; trouble clustering data that isn’t normalised and k values that are not generalized. 

## Aim Of Project
To create a platform where users can input the number of clusters they want and show them a visualisation of the results. Will allow the user to select two variables and will normalise the clusters.

## Minimal Viable System
    - Have a default data set
    - User Input the value of K
    - User will be shown a visualisation of the data

View a Live Demo: https://harisnazir.github.io/K-Means-Clustering-Visualisation/
