/////////// functional
var Queue = function() {
    var obj={}
    var count=0
    var count1=0
    var storge={}
    obj.enqueue=function(value){
        storge[count]=value
        count++

    }
    obj.dequeue=function(){
        if(count-count1){

        var x= storge[0]
        delete storge[0]
        count1++
        return x
    }}
    obj.size=function(){
        var res= count-count1
        return res
    }
}
//////////////
var Stack = function() {
    var obj={}
    var count=0
    var storage={}
    obj.push=function(value){
        storage[count]=value
        count++
    }
    obj.pop=function(){
        if(count>0){
            var x= storage[0]
            delete storage[0]
            count--
            return x
        }
    }
    obj.size=function(){
        return count
    }
    return obj
}
////////// shared functional
var Queue = function() {
    var obj={}
    obj.count=0
    obj.count1=0
    obj.storge={}
    _.extend(obj, objmethod)
    return obj
}
var objmethod={}
objmethod.enqueue=function(value){
    this.storge[this.count]=value
    this.count++

}
objmethod.dequeue=function(){
    if(this.count-this.count1){

    var x= this.storge[0]
    delete this.storge[0]
    this.count1++
    return x
}
}
objmethod.size=function(){
    var res= this.count-this.count1
    return res
}
////////////////
var Stack = function() {
    var obj={}
    obj.count=0
    obj.storage={}
    _.extend(obj, objmethod)
    return obj
}
var objmethod={}
objmethod.push=function(value){
    this.storage[this.count]=value
    this.count++
}
objmethod.pop=function(){
    if(this.count>0){
        var x= this.storage[0]
        delete this.storage[0]
        this.count--
        return x
    }
}
objmethod.size=function(){
    return this.count
}
////////////// prototype
var Queue = function() {
    var obj=Object.create(objmethod)
    obj.count=0
    obj.count1=0
    obj.storge={}
    
    return obj
}
var objmethod={}
objmethod.enqueue=function(value){
    this.storge[this.count]=value
    this.count++

}
objmethod.dequeue=function(){
    if(this.count-this.count1){

    var x= this.storge[0]
    delete this.storge[0]
    this.count1++
    return x
}
}
objmethod.size=function(){
    var res= this.count-this.count1
    return res
}
/////////////
var Stack = function() {
    var obj=Object.create(objmethod)
    obj.count=0
    obj.storage={}
    return obj
}
var objmethod={}
objmethod.push=function(value){
    this.storage[this.count]=value
    this.count++
}
objmethod.pop=function(){
    if(this.count>0){
        var x= this.storage[0]
        delete this.storage[0]
        this.count--
        return x
    }
}
objmethod.size=function(){
    return this.count
}
///////////// pseudoclassical
var Queue = function() {
    this.count=0
    this.count1=0
    this.storge={}
    
}
Queue.prototype.enqueue=function(value){
    this.storge[this.count]=value
    this.count++

}
Queue.prototype.dequeue=function(){
    if(this.count-this.count1){

    var x= this.storge[0]
    delete this.storge[0]
    this.count1++
    return x
}
}
Queue.prototype.size=function(){
    var res= this.count-this.count1
    return res
}
////////////
var Stack = function() {
    this.count=0
    this.storage={}
}
Stack.prototype.push=function(value){
    this.storage[this.count]=value
    this.count++
}
Stack.prototype.pop=function(){
    if(this.count>0){
        var x= this.storage[0]
        delete this.storage[0]
        this.count--
        return x
    }
}
Stack.prototype.size=function(){
    return this.count
}
////////////es6
class Queue {
    constructor(){
    this.count=0
    this.count1=0
    this.storge={}
}

    enqueue(value){
        this.storge[this.count]=value
        this.count++

    }
    dequeue(){
        if(this.count-this.count1){

        var x= this.storge[0]
        delete this.storge[0]
        this.count1++
        return x
    }}
    size(){
        var res= this.count-this.count1
        return res
    }
}
//////////
class Stack {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    constructor() {
      this.counter=0
      this.Storage={}
    }
    push(value){
      this.Storage[this.counter]=value
    this.counter++
    }
    pop(){
      if(this.counter>0){
        this.counter--
        var value =this.Storage[this.counter]
        delete this.Storage[this.counter]
        return value
    }
  
  }
  size(){
    return this.counter
  }
  }
