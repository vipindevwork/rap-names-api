const express = require('express')
app = express()
const PORT = 8000

const rappers ={
    'honey singh':{
        'age':40,
        'birthName': 'Hirdesh Singh',
        'birthplace':'Karampura, New Delhi, India',
    },

    'badshah':{
        'age':37,
        'birthName': 'Aditya Prateek Singh SisodiaHirdesh Singh',
        'birthplace':'New Delhi, India',
    },

    'unknown':{
        'age':0,
        'birthName': 'unknown',
        'birthplace':'unknown',
    }
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname + "/index.html")
})

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()
    //console.log(rappers[rapperName])
    if( rappers[rapperName]){
        response.json( rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    //response.json( rappers)
})

app.listen( PORT, ()=>{
    console.log(`the server is running on port ${PORT}`)

})