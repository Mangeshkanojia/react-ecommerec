// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductsByFilters(filter, sort, pagination) {
    let queryString = '';
    console.log("filter", filter)
    console.log(sort)
    console.log(pagination)

    for(let key in filter){
      if(key==="category"){
        for (let i = 0; i < filter[key].length; i++) {
          queryString+=`category=${filter[key][i]}&`;
        }
        
      }
      if(key==="brands"){
        for (let i = 0; i < filter[key].length; i++) {
          queryString+=`brand=${filter[key][i]}&`;
        }
      }
      if(key==="colors"){
        for (let i = 0; i < filter[key].length; i++) {
          queryString+=`color=${filter[key][i]}&`;
        }
      }
      // const categoryValues = filter[key];
      // if(categoryValues.length){
      //   const lastCategoryValue = categoryValues[categoryValues.length-1]
      //   queryString += `${key}=${lastCategoryValue}&`
      // }
    }

    for(let key in sort){
      queryString += `${key}=${sort[key]}&`
    }

    for(let key in pagination){
      queryString += `${key}=${pagination[key]}&`
    }
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products?'+queryString) 
    const data = await response.json()
    const totalItems = await response.headers.get('X-Total-Count')
    resolve({data:{products:data,totalItems:+totalItems}})
  }
  );
}

export function fetchCategeories() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/categeories') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchBrands() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/brands') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products/'+id) 
    const data = await response.json()
    resolve({data})
  }
  );
}