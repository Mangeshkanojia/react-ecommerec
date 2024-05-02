export function createUser(userData) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users',{
      method:'POST',
      body: JSON.stringify(userData),
      headers:{'content-type':'application/json'}
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function checkUser(logiInfo) {
  return new Promise(async (resolve,reject) =>{
    const email = logiInfo.email;
    const password = logiInfo.password;
    const response = await fetch('http://localhost:8080/users?email='+email) 
    const data = await response.json();
    console.log({data});
    if(data.length){
      if(password===data[0].password){
        resolve({data:data[0]})
      }
      else{
        reject({error:"Wrong Password"});
      }
    }else{
      reject({message: 'user not found'})
    }
  }
  ); 
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/users/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const mangesh = await response.json();
    // TODO: on server it will only return some info of user (not password)
    console.log("hii",mangesh);
    resolve( mangesh.data);
  });
}

