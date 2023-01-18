const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // se esta llamando una clase asi que debe ser con .name
const $b = document.querySelector('.blog'); // aca se estaba llamando una ID con # pero es una clase
const $l = document.querySelector('.location'); // location no existia en el html y lo cree

async function displayUser(username) { // añadi el async
  $n.textContent = 'cargando...';

  try{
  const response = await fetch(`${usersEndpoint}/${username}`); //el await no puede usarse en una funcion que no es async, así que se la añadi a la funcion displayUser
  if(!response.ok){                               //se usa el metodo ok y statusText para verificar que la peticion ea exitosa
    throw new Error(response.statusText);          
  }
  const data = await response.json(); // proceso respuesta del fetch y lo convierto a un objeto JS
  $n.textContent = data.name;    //no se estaba accediendo al objeto porque tenia comilla simple ''
  $b.textContent = data.blog;   //no se estaba accediendo al objeto porque tenia comilla simple ''
  $l.textContent = data.location; //no se estaba accediendo al objeto porque tenia comilla simple ''
}catch (err){   // si no es exitosa atrapa el error  y llama a la funcion handleError
  handleError(err); //atrapo el errror de la funcion del handleError, antes estaba llamando con el displayuser
}
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;  //falto añadir el $ al inicio de la n
}

displayUser('stolinski'); // aqui solo era llamar la funcion con el nombre, y tenia un .catch y llamando la funcion error