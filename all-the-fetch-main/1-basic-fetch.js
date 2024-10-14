const url = 'https://jsonplaceholder.typicode.com/users';

export function getData() {

  fetch(url)
    .then((resp) => {
      // console.log(resp)
      // we always want to do error handling.
      // console.log(resp.status)
      if (!resp.ok) throw new Error("was not a valid response")
      return resp.json(); //method to extraxt JSON string and convert it to an Object
    })
    .then(dataobj => {
      console.log(dataobj)
    })
    .catch(err404 => {
      console.warn(err404.message)
    });
}















// export function getData1() {

//   fetch(url)
//     .then((resp) => { 
//       // console.log(resp)
//       //we always want to do error handling.
//       // console.log(resp.status)
//       if(!resp.ok) throw new Error("was not a valid response")
//         return resp.json(); //method to extraxt JSON string and convert it to an Object
//     })
//     .then(dataobj =>{
//       console.log(dataobj)
//     })
//     .catch(err404 => {
//       console.warn(err404.message)
//     });
// }

// function fred(resp) {


// }