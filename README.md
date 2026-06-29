# User Management Dashboard

## Project Overview

A React-based User Management Dashboard that performs CRUD operations using JSONPlaceholder API.

Features:

* View Users
* <img width="1911" height="957" alt="image" src="https://github.com/user-attachments/assets/8887f805-5571-4a8c-b5bb-674cff79f2e8" />

* Add User
* <img width="1896" height="872" alt="image" src="https://github.com/user-attachments/assets/1548559a-4741-4b6d-b5fd-437b42e45b07" />

* Edit User
* <img width="1891" height="858" alt="image" src="https://github.com/user-attachments/assets/93065abc-7ed1-4a1f-8a5f-38c83355069c" />

* Delete User
* <img width="1892" height="962" alt="image" src="https://github.com/user-attachments/assets/68976bc0-6c81-4210-94e5-3a3106116dcd" />

* Search Users
* <img width="1907" height="852" alt="image" src="https://github.com/user-attachments/assets/05648033-79f7-4976-bef1-942629c4e605" />

* Filter Users
* <img width="1892" height="833" alt="image" src="https://github.com/user-attachments/assets/86f3af44-76a4-4f13-9f4a-6dc25a6a44c4" />

* Sort Users
* <img width="1785" height="863" alt="image" src="https://github.com/user-attachments/assets/45bbb192-d35f-464f-bafd-e559750b02cd" />

* Pagination
* <img width="1886" height="847" alt="image" src="https://github.com/user-attachments/assets/52c24bd8-600a-4e4c-b3a1-74c6191ef8d0" />

* Responsive Design

## Technologies Used

* React.js
* JavaScript
* Axios
* CSS3

## Installation

```bash
npm install
npm run dev
```

## API Used

https://jsonplaceholder.typicode.com/users

## Folder Structure

src
├── api
├── Component
├── Pages
└── Styles

## Assumptions

Since JSONPlaceholder does not provide:

* firstName
* lastName
* department

The application:

* Splits full name into firstName and lastName
* Generates department values locally

