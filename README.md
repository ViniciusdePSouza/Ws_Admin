# Getting Started

First, clone the repository to your machine using git clone.
After that, navigate to the project folder and install all the dependencies by running:
```bash
npm install
# or 
yarn install.
```
Next, you'll need to start the JSON Server API to enable signing in to the application. To do this, run the following command in your terminal:

```bash
json-server --watch db.json --port 4000
```
Note: You must run the API server on port 4000 to avoid conflicts with the e-commerce project. This ensures both applications can make HTTP requests successfully.

With the API up and running, you can now start the admin dashboard application by running the following command in your terminal:

```bash
npm install
# or 
yarn install.
```
Open http://localhost:5173/ in your browser to view the result.

To log in, use the following credentials:

Username: admin@admin.com
Password: "admin"

## About the aplication
This is an administration panel for an e-commerce platform. With this application, users can manage all product data, including editing, deleting, and creating new products. Additionally, there is a brief description about the company, accessible through a menu option on the left side of the screen.

For styling, the styled-components library was used to enhance the dynamic nature and productivity of the entire work process.

The entire project was developed using TypeScript.
