import axios from "axios"
import Cookies from 'js-cookie'

const uri = import.meta.env.VITE_APP_URI

const createSession = async (lineItems, id) => {
    try {
      const response = await fetch(`${uri}/order/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          line_items: lineItems,
          id: id,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.sessionId;
    } catch (error) {
      console.error(error);
      // Handle error in your application
      throw new Error('Failed to create session');
    }
  };
  
  export default createSession;
  