/* const axios = require('axios');

const getCharDetail= (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data =>{
        const character = {
            id: data.id, 
            name: data.name, 
            gender: data.gender, 
            species: data.species, 
            image: data.image, 
            status: data.status,
            origin: data.origin?.name,
        }; 
        res
        .writeHead(200, {'Content-Type':'application/json'})
        .end(JSON.stringify(character));
    })    
        .catch(error => res.writeHead(500,{'Content-Type':'text/plain'})
        .end(error.message)
    )
};
module.exports = getCharDetail;
*/

// axios(URL + detailId ).then((response)=> {
//         const character = {
//             id: response.data.id, 
//             name: response.data.name, 
//             image: response.data.image, 
//             gender: response.data.gender,
//             species: response.data.species, 
//             status: response.data.status,
//             origin: response.data.origin?.name,
//         }; 
//            return res.status(200).json(character);
//         })        
//         .catch((error) => {
//             res.status(500).json(error.message);
//         });   

const axios = require('axios');
const URL =  "https://rickandmortyapi.com/api/character/";

async function getCharDetail (req, res) {
const { detailId } = req.params;
try {
    const response = await axios.get(URL + detailId);
    const character = {
        id: response.data.id, 
        name: response.data.name, 
        image: response.data.image, 
        gender: response.data.gender,
        species: response.data.species, 
        status: response.data.status,
        origin: response.data.origin?.name, 
         }; 
         res.status(200).json(character);  
} catch (error) {
    res.status(500).json(error.message)
}        
};
    
module.exports = { getCharDetail };