# Random User Application

URL: https://rndm-users-app.netlify.app 

###### UserCard

| Property    | Description                          | Type                                                                                                     | Default |
|-------------|--------------------------------------|----------------------------------------------------------------------------------------------------------|---------|
| uuid        | Item unique identifier of            | any                                                                                                      |         |
| picture     | Picture source for avatar            | string                                                                                                   |         |
| name        | User name and surname                | {first: string, last: string}                                                                            |         |
| email       | User email                           | string                                                                                                   |         |
| nationality | User nationality                     | string                                                                                                   |         |
| gender      | User gender                          | male \| female                                                                                           |         |
| location    | User address                         | {country: string, state: string, city: string, postcode: string, street?:{ number:string, name:string }} |         |
| onDelete    | Called when delete button is pressed | function(uuid)                                                                                           |         |
| isLoading   | If table should display loading icon | bool                                                                                                     | false   |


###### UserDetail

*Component under contruction.*