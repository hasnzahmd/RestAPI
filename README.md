# RestAPI

RestAPI is a robust REST API built with TypeScript, Node.js, Express, and MongoDB. It is designed to provide a solid foundation for any web application requiring user authentication and data persistence.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete functionality for managing resources.
- **Authentication**: Secure user authentication system including registration, login, and access control.
- **JWT Token Integration**: JSON Web Tokens (JWT) for secure transmission of information between parties.
- **Data Validation**: Comprehensive request data validation to ensure data integrity.
- **Error Handling**: Advanced error handling mechanisms for a better debugging experience and user feedback.

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/RestAPI.git
cd RestAPI
```
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables:
```
No need for this, MongoDB connection string used in this API is public.
```
4. Start the server:
```bash
npm start
```
### Usage

#### Endpoints
| Method | URL                   | Description                | Access Control    |
| ------ | --------------------- | -------------------------- | ----------------  |
| GET    | /api/users             | Get all users               | Public            |
| PUT    | /api/users/:id         | Update user info           | Public          |
| DELETE | /api/users/:id         | Delete user                 | Public          |
| POST   | /api/auth/register     | Register as a new user       | Public           |
| POST   | /api/auth/login        | Log in to an existing account| Public           |
<!--| POST   | /api/users             | Add new user                | Public         |
| GET    | /api/users/:id         | Get user by id              | Public or Private |-->

To start, first register as a new user by providing username, email, and password  in JSON format in the body of the request. If you already have an account login with your email and password. Now you can perform the given crud operations on the defined endpoints.

## Contributing
Contributions are welcome! Please follow these guidelines:
```
1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.
```

## License
This project is licensed under the [MIT](./LICENSE) license.
