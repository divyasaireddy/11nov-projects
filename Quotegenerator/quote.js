const quotes=[
"Time is the most valuable thing a man can spend” – Theophrastus" ,
`" Never leave till tomorrow that which you can do today"` ,
`" The two most powerful warriors are patience and time” – Leo Tolstoy"` ,
`" Your time is limited, so don't waste it living someone else's life.” – Steve Jobs"`,
`" Time is more valuable than money. You can get more money, but you cannot get more time” – Jim Rohn"`,
`" The trouble is, you think you have time” – Jack Kornfield"`,
`" They always say time changes things, but you actually have to change them yourself” – Andy Warhol"`,
`" One can find time for everything if one is never in a hurry” – Mikhail Bulgakov"`,
`" Time is a created thing. To say ‘I don't have time,' is like saying, ‘I don't want to"`,
`" Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.” – Mother Teresa"`,
`" Time waits for no one” – Unknown author"`,
`" Time moves slowly but passes quickly.” – Alice Walker"`
]

let quote=document.querySelector("div")

const colors=[
   "aqua","lightaqua", "lightcoral", "lightgreen", "lightpink", "orange", "purple", "yellowgreen"
]
function getQuote(){
    let eachQuote=Math.floor(Math.random()*quotes.length)
    let eachColor=Math.floor(Math.random()*colors.length)

    quote.textContent=quotes[eachQuote];
    
    quote.style.backgroundColor="lightblue"
    quote.style.borderRadius="15px"
    
  
    document.body.style.backgroundColor=colors[eachColor]

}
