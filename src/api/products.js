import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

export const fetchAllProducts = async () => {
    const response = await axios
        .get(`${uri}/products`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })
        .catch((error) => {
            console.error(error);
        })
    if (response.status == 200) {
        return response.data
    } else {
        return "Found literally nothing!"
    }
}

export const fetchDragonSpells = async () => {
    const response = await axios.get(`${uri}/category/2`, {
        headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
        }
    })
    if (response.status == 200) {
        return response.data;
    }
    else return null
}

export const fetchCollections = async (navigate) => {
    const response = await axios
        .get(`${uri}/collection`, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })
        .catch((error) => {
            navigate("/error/500");
        })
    if (response.status == 200) {
        return response.data;
    }
    else return null
}

export const addNewProduct = async ({
    name,
    description,
    price,
    images,
    quantity,
    categoryId,
    collectionId,
}) => {
    try {
        const formData = new FormData();
        formData.append('name', name);
        // formData.append('categoryId', categoryId);
        formData.append('collectionId', collectionId);
        formData.append('description', description);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('images', images);
        console.log(images);
        // if (images) {
        //     images = Object.values(images);
        //     // console.log(images)
        //     if (Array.isArray(images) && images.length >= 2) {
        //         images.forEach((image, index) => {
        //             // console.log(image)
        //             // formData.append(`images[${index}]`, image);
        //             formData.append(`images[${index}]`, image);
        //         });
        //     } else {
        //         formData.append('images', images);
        //     }
        // }
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        const response = await axios.post(`${uri}/product/add`, {
            name,
            description,
            price,
            images,
            quantity,
            categoryId,
            collectionId,
        }, {
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`,
                'Content-Type': 'multipart/form-data',
            }
        });

        // console.log("formData: " ,formData);
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



export const addNewCategory = async (categoryName) => {
    try {
        const response = await axios.post(`${uri}/category/add`, { categoryName }, {
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

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${uri}/category`, {
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

export const addNewCollection = async (collectionName) => {
    try {
        const response = await axios.post(`${uri}/collection/add`, { name: collectionName }, {
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

export const getAllCollections = async () => {
    try {
        const response = await axios.get(`${uri}/collection`, {
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
