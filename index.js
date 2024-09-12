//This is my first javascript code
//console.log('Hello world');
//let name='Eman';
//console.log('name');
//it should not be a reserved word
//should be meaningful
//cannot start witha number
//cannot contain a space or number

//try and catch
/*const person ={
    firstName ='Eman',
    lastName ='Nasir',
set fullName (value){
    if(typeof value!== 'string');
throw new Error('Value is not a string');

const parts = value.split('');
this.firstName =parts[0],
this.lastname =parts[1],
}
};
try{
    person.fullName= '',
}
catch (e){
    alert(e);
}




//Rest operator
function sum(discount,...prices){
    const total=prices.reduce((a,b)=>a+b);
     return total*(1-discount);

}
console.log(sum(0.1,20,30));

//Property Descriptor
 function circle(radius){
    this.radius= radius;

    this.draw=function(){
        console.log('draw');

    }
 }
 const circle= new circle(10);

/* let person={name:'Mosh'};
 let ObjectBase=Object.getPrototypeOf(person);
 let descriptor=Object.getOwnPropertyDescriptor(ObjectBase,'toString');{
    console.log('descriptor');
 }
 */
//Mixins
const  canEat={
    eat: function(){
        this.hunger--;
        console.log('eating');
        
    }
 }
 const canWalk={
walk: function(){
    console.log('walking');

}
 }
 /*function Person(){

 }*/
 /*const person=Object.assign=({}, canEat, canWalk);
 //const person=new Person();
 console.log('person'); */


 //Multilevel Inheritance
function Circle(radius){
    this.radius=radius;

    this.draw=function(){
        console.log('draw');
    }
}
const circle=new Circle(10);

 
 
 //prototypical inheritance
 function shape() {
}
shape.prototype.duplicate=function(){
    console.log('duplicate')
}
function circle (radius){
    this.radius=radius
}
circle.prototype=Object.create(shape.prototype);

circle.prototype.draw=function(){
    console.log=('draw')
}
const s= new shape();
const c= new circle(1);

//Exercise
function HtmlElement()
{this.click=function()
   {
console.log=('clicked');}
}
HtmlSelectElement.prototype.focus=function()
{
console.log('focused');
}

   

function HtmlSelectElement(items=[]){
{this.items=items

this.additem=function(item){
this.items.push(item)}
}

this.removeitems=function(){
this.items.splice(this.items.indexof(item),1);}

this.render= function(){
return` 
{<select>${this.items.map (item=> `
   <option>${items}</option>`).join('')}
<select>`;
   }
const renderitem =  item=>` <option>${item}<option>`;
HtmlSelectElement.prototype=new HtmlElement();
HtmlSelectElement.prototype.constructor=HtmlElement();

function HtmlElement(src){
this.src=this.src
this.render=function(){
return `<img src={"${this,src}"  />;`
}
//baseHtmlELement
//HtmlSelectElement.prototype=Object.create(HtmlElement.prototype);
}

//Es6 Classes
class Circle{
   constructor(radius){
       this.radius= radius;
       this.move=function(){}
   }
}

draw()
{
   console.log('draw')
}
const c = new Circle(1);

}
