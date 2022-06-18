const QUOTEBANK = [
    {
        quote:" “Take risks in your life, If you win, you can lead! If you loose, you can guide!",
        author :"Swami Vivekananda"
    }, {
        quote:" “Strength is life; weakness is death.”",
        author:"Swami Vivekanand" 
     }, {
        quote:"“Experience is the only teacher we have. we may talk and reason all our lives, but we shall not understand a word of truth.”",
        author:"Swami Vivekanand"
     },{
        quote:"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
        author:"Swami Vivekanand"
     },{
        quote:"“Take up one idea, make that one idea your life. Think of it, dream of it, Live on that idea let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success.”",
        author:"Swami Vivekanand"
     },{
        quote:"“Learn everything that is good from others, but bring it in, and in your own way adsorb it; do not become others.”",
        author:"Swami Vivekanand"
     }
        
    
        
];
window.onload= init;
function init(){
     generateQuote()
    }
    function generateQuote(){
        let quoteSize= QUOTEBANK.length;
        let randomIndex= Math.floor(Math.random()*quoteSize);
        let randomQuoteData=QUOTEBANK[randomIndex];
        let twitterlink= "https://twitter.com/intent/tweet?text=quotegoeshere"
        let quoteInApiFormat=randomQuoteData.quote.replace(/ /g,"%20");
        twitterlink+=quoteInApiFormat;
        let authorInApiFormat=randomQuoteData.quote.replace(/ /g,"%20");
        twitterlink+=authorInApiFormat;
        document.getElementById("tweet-quote").href=twitterlink;
    document.getElementById("text").innerText= randomQuoteData.quote;
    document.getElementById("author").innerText=randomQuoteData.author;
    

}