# Ideaboard

## Notas do Desenvolvedor
- API 100% funcional
- Front-end React com comportamento errático não diagnosticável no modal de criação de nova ideia.

## API routes

### POST /api/signup
- input: username, password, password_confirmation
  - localhost:3001/api/signup?username=bode&password=123&password_confirmation=123
- outuput: password
```
{
    "username": "bode"
}
```

### POST /api/login
- input: username, password
  - localhost:3001/api/login?username=bode&password=123
- outuput: password
```
{
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1NTc0OTM0MTZ9.HnMk5BffLr5aDZxSurIcG5RUQzoI7T2Pey2Fut1jweo",
    "exp": "05-30-2019 20:03",
    "username": "bode"
}
```

### GET /api/ideas
- input:
  - localhost:3001/api/ideas
- output: ideas list
```
{
    "ideas": [
        {
            "id": 1,
            "user_id": 2,
            "title": "test",
            "description": "another test to run 1",
            "created_at": "2019-05-29T18:07:05.727Z",
            "updated_at": "2019-05-29T18:57:48.687Z"
        },
        {
            "id": 2,
            "user_id": 2,
            "title": "test",
            "description": "another test to run 2",
            "created_at": "2019-05-29T18:45:50.088Z",
            "updated_at": "2019-05-29T18:58:11.179Z"
        }
    ]
}
```

### POST /api/ideas
- input: title, description
  - localhost:3001/api/ideas
- output: idea
```
{
    "idea": {
        "id": 3,
        "user_id": 1,
        "title": "test",
        "description": "another test to run",
        "created_at": "2019-05-29T18:48:30.139Z",
        "updated_at": "2019-05-29T18:48:30.139Z"
    }
}
```

### PUT /api/ideas
- input: id, title, description
  - localhost:3001/api/ideas
- output:
```
{
    "idea": {
        "user_id": 1,
        "id": 3,
        "title": "test",
        "description": "another test to run 3",
        "created_at": "2019-05-29T18:48:30.139Z",
        "updated_at": "2019-05-29T18:58:25.796Z"
    }
}
```

### DELETE /api/ideas
- input: id
  - localhost:3001/api/ideas
- output:
