# Personal API Spec

## Ceate Personals API

- Endpoint : POST /personals
- Request Body :

```json
{
  "name": "Pojok Code",
  "email": "code@gmail.com"
}
```

- Response Success :

```json
{
  "errors": null,
  "data": [
    {
      "id": 1,
      "name": "Pojok Code",
      "email": "code@gmail.com"
    }
  ]
}
```

- Response Error :

```json
{
  "errors": ["error1", "error2"],
  "data": null
}
```

## Get All Personal

- Endpoint : GET /personals
- Request Body :

```json

```

- Response Success :

```json
{
  "errors": null,
  "data": [
    {
      "id": 1,
      "name": "Pojok Code",
      "email": "code@gmail.com"
    },
    {
      "id": 2,
      "name": "Pojok Code",
      "email": "code@gmail.com"
    }
  ]
}
```

- Response Error :

```json
{
  "errors": ["error1", "error2"],
  "data": null
}
```

## Get personal By Id

- Endpoint : GET /personals/:id
- Request Body :

```json

```

- Response Success :

```json
{
  "errors": null,
  "data": {
    "id": 1,
    "name": "Pojok Code",
    "email": "code@gmail.com"
  }
}
```

- Response Error :

```json
{
  "errors": ["error1", "error2"],
  "data": null
}
```

## Update Personal

- Endpoint : PUT /personals/:id
- Request Body :

```json
{
  "name": "Pojok Code",
  "email": "code@gmail.com"
}
```

- Response Success :

```json
{
  "errors": null,
  "data": {
    "id": 1,
    "name": "Pojok Code",
    "email": "code@gmail.com"
  }
}
```

- Response Error :

```json
{
  "errors": ["error1", "error2"],
  "data": null
}
```

## delete Personal

- Endpoint : DELETE /personals/:id
- Request Body :

```json

```

- Response Success :

```json
{
  "errors": null,
  "data": { "id": 1 }
}
```

- Response Error :

```json
{
  "errors": ["error1", "error2"],
  "data": null
}
```
