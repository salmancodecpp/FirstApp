import snap
import matplotlib.pyplot as plt
    

#Loading dataset in edgelist form
N = snap.GenRndGnm(snap.PUNGraph, 1134890, 2987624)


#no of nodes and edges
Nodes = N.GetNodes()
print("Nodes: %d" % Nodes)
Edges = N.GetEdges()
print("Edges: %d" % Edges)

#diameter
LongShortPathDiam = snap.GetBfsFullDiam(N, Nodes, False)
print("The Longest Shortest path (Diameter) of this youtube Network is %d" % LongShortPathDiam)
