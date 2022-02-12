
// Defining the base API url
const BASE_URL = 'https://randomuser.me/api/'; 


/** @param {string} endpoint */ 
const get = async (endpoint) => { 
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    return await response.json();
};

export const apiProvider = { 
    get
};