class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjencencyList[vertex] = [];
        }
    }
    addEdge(source , destination){
        if(!this.adjacencyList[source]){
            this.addVertex(source)
        }
        if(!this.adjacencyList[destination]){
            this.addVertex(destination)
        }
        this.adjacencyList[source].push(source);
        this.adjacencyList[destination].push(destination);
    }
}