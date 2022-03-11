## backend-about
Este es una API de Graphql Conectada a una base de datos no sql ('mongo db') en la que realizaran distintas funciones descritas a continuacion:

<h1>Querys</h1>

<h2>'users'</h2>

query{
  users{
    id
    username
    email
    displayName
  }
}

Esta linea de codigo mostramos una lista de usuarios que se han registrado en la base de datos

<h2>'user'</h2>

query{
  user(id:""){
    id
    username
    email
    displayName
  }
}

En esta se buscara un usuario acorde a su id

<h2>'employees'</h2>

query{
  employees{
    id
    name_employee
    lname_employee
    email_employee
    nationality
    phone_employee
    civil_status
    birthday
  }
}

En esta query retorna la lista de empleados registrados hasta el momento

<h2>'employee_by_id'</h2>

query{
 employee_by_id(id:"")
  {
    id
    name_employee
    lname_employee
    email_employee
    nationality
    phone_employee
    civil_status
    birthday
  }
}

En esta funcion retorna un employee tomando en cuenta su id adicionalmente las siguientes funciones sirven similar:
  employee_by_name(name_employee:"")
  employee_by_last_name(lname_employee:"")
  employee_by_email(email_employee:"")
  employee_by_nationality(nationality:"")
  employee_by_phone(phone_employee:"")
  employee_by_civil_status(civil_status:"")
  employee_by_birthday(birthday:"")
  
  Tomando en cuenta cada atributo de employee
  
  
<h1>Mutations</h1>
  
<h2>register</h2>
  
  register(
    username:"",
    email:"", 
    password:""
  )
  
  Registra a un nuevo usuario
  
<h2>login</h2>
  
login(email:"",gpassword: "")

Se planteaba usar este para manejar el login junto con jsonWebToken

<h2>createEmployee</h2>

createEmployee(
  name:"",
  lname:"",
  email:"",
  nationality:"",
  phone:"",
  civil_status:"",
  birthday:"",)
  
Mutation plamteada para la creacion de los empleados


<h2>updateEmployee</h2>

updateEmployee(
  id:"",
  name_employee:"",
  lname_employee:"",
  email_employee:"",
  phone_employee:""
)
  {
    id
    name_employee
    lname_employee
    email_employee
    nationality
    phone_employee
    civil_status
  }
  
  Mutation para la modificacion de los empleados
  
  <h2>deleteEmployee</h2>
  
  deleteEmployee(id:"")
  
  Mutation planteada para borrar a los Employee
  
