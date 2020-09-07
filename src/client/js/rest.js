/**
 * Wrapper to fetch Data
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * @Author: Claudio Acioli
*/
export const
  
  getData = async (url, mode="cors") => {
    const response = await fetch(url, {method:"GET", mode});
    
    try {
      const result = await response.json();
      return result;
    } catch (ex) {
      console.error("Error", ex);
    }
  },

  postData = async (url, data={}, mode="cors") => {
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(data),
      mode,
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });

    try {
      const result = await response.json();
      return result;
    } catch (ex) {
      console.error("Error", ex);
    }
  }
;
