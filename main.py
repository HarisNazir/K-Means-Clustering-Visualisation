import numpy as np #Math Library
import pandas as pd #Data Processing Library
import matplotlib.pyplot as plt #Data Visualisation Library
import seaborn as sns #Additional Data Visualisation Library
from sklearn.cluster import KMeans #Clustering Library

dataset = pd.read_csv("data/Mall_Customers.csv") #Read data from CSV Files

print("Dataset Shape: ", dataset.shape)

print("First 10 Rows: ", dataset.head(10))

print("Check for missing values and other anomalies: ", dataset.info())

#There should be no missing values for this example dataset

plt.figure(figsize=[12,10])
sns.scatterplot(x="Age", y="Spending Score (1-100)", data=dataset)

#For this example dataset we only want to consider Annual Income and Spending Score

X = dataset.iloc[:, [2,4]].values #iloc allows for access to data in the dataframe though aboslute position in the form of [[rows], [columns]]
print(X)

#To use the K means algorithm we need to decide on the number of clusters needed this will be done below:
inertias=[]

for i in range(1,11):
    
    #init = "Kmeans++" which selects the inital cluster center for K-Means clustering in a smarter way in order to speed up convergence
    kmeans = KMeans(n_clusters=i)

    #fit is the method that will do the convergence on the position of the centroids
    kmeans.fit(X)

    #ineratia_ is a mesaure of how good the fit is (the lower the better)
    inertias.append(kmeans.inertia_)

#visualise interatia vs k (the num of clusters) & using elbow method decide on optimal value of K
plt.figure(figsize=[12,10])
p=sns.lineplot(range(1,11),inertias)
p.set_title('The Elbow Method')
dummy = p.set(xlabel='no of clusters', ylabel='inertia')

#elbow comes at k=4, so we can build the model with k = 5
kmeansmodel = KMeans(n_clusters = 4)
#find position of centroids
kmeansmodel.fit(X)
#Assigns each data point to a cluster
clustered = kmeansmodel.predict(X)

print(clustered)

plt.figure(figsize=[12,10])

# X has 2 coloums: 0 and 1
# X[clustered == n, 0] gives you the 'x' points (annual income)
# X[clustered == n, 1] gives you the 'y' points (spending scores)

#We do this for each of the 4 clusters
#s is the point radius

sns.scatterplot(X[clustered == 0, 0], X[clustered == 0, 1], s = 80, label = "Cluster 1")
sns.scatterplot(X[clustered == 1, 0], X[clustered == 1, 1], s = 80, label = "Cluster 2")
sns.scatterplot(X[clustered == 2, 0], X[clustered == 2, 1], s = 80, label = "Cluster 3")
sns.scatterplot(X[clustered == 3, 0], X[clustered == 3, 1], s = 80, label = "Cluster 4")

#then the centroids
sns.scatterplot(kmeans.cluster_centers_[:, 0], kmeansmodel.cluster_centers_[:, 1], s = 1000, color = "black", marker="+", label = "Centroids")

plt.title("Customer Segmentation")
plt.xlabel("Annual Income ($)")
plt.ylabel("Spending Score (1-100)")
plt.legend()

plt.show()