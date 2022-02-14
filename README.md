# Random User Application

URL: https://rndm-users-app.netlify.app 

######UserCard

| Property    | Description                          | Type                                           | Default |
|-------------|--------------------------------------|------------------------------------------------|---------|
| uuid        | Item unique identifier               | any                                            |         |
| picture     | Picture source for avatar            | string                                         |         |
| name        | User name and surname                | {first: string, last: string}                  |         |
| email       | User email                           | string                                         |         |
| nationality | User nationality                     | string                                         |         |
| gender      | User gender                          | male \| female                                 |         |
| location    | User address                         | {country: string, state: string, city: string} |         |
| onDelete    | Called when delete button is pressed | function(uuid)                                 |         |


######UserDetail

*Component under contruction.*