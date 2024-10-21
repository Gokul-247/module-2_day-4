const express = require('express')
const app = express()
const port = 3000

/*var sampleobject = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}*/

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Instagram',(request,response) => {
    response.send('This the official Instagram Web Page')
})*/

var sampleobject1 = {
    "name" : "Raj",
    "age" : 30,
    "gender" : "male",
    "place" : "Bangalore",
    isemployee : true
}

app.get('/Twitter',(req,re) => {
    res.send({message: 'Twitter is down'})
})

app.get('/example',(req,res) => {
    res.status(207).send(sampleobject1)
})

app.get('/:name',(req,res) => {
    const outputName = req.params.name
    res.send({msg:`welcome ${outputName}`})
    console.log(outputName);   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})