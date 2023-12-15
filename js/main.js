var Qoutes= 
[
  {qoute:'“Be the change that you wish to see in the world.”' ,
   auther:'― Mahatma Gandhi'},
   {qoute:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”" ,
   auther:'― J.K. Rowling, Harry Potter and the Goblet of Fire'},
   {qoute:"“If you tell the truth, you don't have to remember anything.”" ,
   auther:'― Mark Twain'} ,
   {qoute:'“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”' ,
   auther:'― C.S. Lewis, The Four Loves'} ,
   {qoute:'“A friend is someone who knows all about you and still loves you.”' ,
   auther:'― Elbert Hubbard'} ,
   {qoute:'“To live is the rarest thing in the world. Most people exist, that is all.”' ,
   auther:'― Oscar Wilde'},
   {qoute:'“Always forgive your enemies; nothing annoys them so much.”' ,
   auther:'― Oscar Wilde'},
   {qoute:'“Live as if you were to die tomorrow. Learn as if you were to live forever.”' ,
   auther:'― Mahatma Gandhi'},
   {qoute:'“We accept the love we think we deserve.”' ,
   auther:'― Stephen Chbosky, The Perks of Being a Wallflower'} ,
   {qoute:'“Without music, life would be a mistake.”' ,
   auther:'― Friedrich Nietzsche, Twilight of the Idols'},
];
var Qoute= document.getElementById('qoute');
var auther= document.getElementById('auther');
var temp=-1;
function generateQoute(){
    var randm =Math.trunc(Math.random()*10);
   while(temp==randm){
    randm = Math.trunc(Math.random()*10);

   }
   Qoute.innerText=Qoutes[randm].qoute;
   auther.innerText=Qoutes[randm].auther;
   temp= randm;

    // var random = Math.trunc(Math.random()*10);
    // console.log(Qoutes[random]);
    // divQoute.innerText=Qoutes[random].qoute;
}