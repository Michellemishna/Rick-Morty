/* const axios = require('axios');

const getCharById = (res,id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data=>{
        const character = {
            id: data.id, 
            name: data.name, 
            gender: data.gender, 
            species: data.species, 
            image: data.image, 
        }; 
        res
        .writeHead(200, {'Content-Type':'application/json'})
        .end(JSON.stringify(character));
    })    
        .catch(error => res.writeHead(500, {'Content-Type':'text/plain'})
        .end(error.message)
    )
};

module.exports = getCharById;

*/

// axios(URL + id).then((response)=> {
//         const character = {
//             id: response.data.id, 
//             name: response.data.name, 
//             image: response.data.image, 
//             gender: response.data.gender,
//             species: response.data.species, 
//         }; 
//          res.status(200).json(character);
//         },        
//         (error) => {
//             res.status(500).json(error.message)
//         });    

const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById (req, res) {
   const { id } = req.params;
try {
    const response = await axios.get(URL + id);
    const character = {
        id: response.data.id, 
        name: response.data.name, 
        image: response.data.image, 
        gender: response.data.gender,
        species: response.data.species, 
         }; 
         res.status(200).json(character);  
} catch (error) {
    res.status(500).json(error.message)
}        
}    

module.exports = { getCharById };