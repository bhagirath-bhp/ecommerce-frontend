import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

export const fetchAllProducts = async() => {
    try {
        const response = await axios.get(`${uri}/products`,{
            headers:{
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })
        if(response.status==200){
            return response.data
        }else{
            return "Found literally nothing!"
        }
        
    } catch (error) {
        console.log(error)
        return error;
    }
}

export const fetchDragonSpells = async() => {
    const response = await axios.get(`${uri}/category/2`,{
        headers:{
            'Authorization' : `Bearer ${Cookies.get('token')}`
        }
    })
    if(response.status == 200){
        return response.data;
    }
    else return null
}

export const fetchCollections = async() => {
    const response = await axios.get(`${uri}/collection`,{
        headers:{
            'Authorization' : `Bearer ${Cookies.get('token')}`
        }
    })
    if(response.status == 200){
        return response.data;
    }
    else return null
}

// Add a new product 
export const addNewProduct = async (productData) => {
    try {
        const response = await axios.post(`${uri}/product/add`, productData, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};


// Add a new category
export const addNewCategory = async (categoryName) => {
    try {
        const response = await axios.post(`${uri}/categories`, { categoryName }, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Get all categories
export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${uri}/categories`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Add a new collection
export const addNewCollection = async (collectionName) => {
    try {
        const response = await axios.post(`${uri}/collections`, { name: collectionName }, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Get all collections
export const getAllCollections = async () => {
    try {
        const response = await axios.get(`${uri}/collections`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Get all products
export const getAllProducts = async (page = 1, pageSize = 6, sortBy = 'price', sortOrder = 'ASC') => {
    try {
        const response = await axios.get(`${uri}/products`, {
            params: {
                page: page,
                pageSize: pageSize,
                sortBy: sortBy,
                sortOrder: sortOrder,
            },
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};


// Get a single product by ID
export const getAProductById = async (productId) => {
    try {
        const response = await axios.get(`${uri}/product/${productId}`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Update a product
export const updateProduct = async (productId, updatedData) => {
    try {
        const response = await axios.put(`${uri}/products/${productId}`, updatedData, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Delete a product
export const deleteProductById = async (productId) => {
    try {
        const response = await axios.delete(`${uri}/products/${productId}`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Get products by category ID
export const getProductsByCategoryId = async (categoryId) => {
    try {
        const response = await axios.get(`${uri}/categories/${categoryId}/products`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};
