function  info() {
    var name= prompt("hello enter your name");
     var mark1=prompt("enter your first mark");
     var mark2=prompt("enter your second mark");
     var mark3=prompt("enter your third mark");
     if (mark1 && mark2 && mark3 >=0 &&mark1 && mark2 && mark3<=100 ){
         var sum= parseInt(mark1 )+parseInt( mark2) +parseInt( mark3) ;
         console.log(typeof(sum));
         var avg= sum/3;
         alert("hello"+name+"this is  your avg"+ avg )
     }
     }
 info();
 