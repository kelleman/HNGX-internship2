PERSON API DOCUMENTATION
This document provides detailed information on how to use the Person API. The API allows you to perform CRUD operations on a "person" resource.

ENDPOINTS
Create a New Person
Read a Person by ID
Update a Person by ID
Delete a Person by ID

Request and Response Formats
Create a New Person
Read a Person by ID
Update a Person by ID
Delete a Person by ID
Sample Usage
Limitations and Assumptions
Setup Instructions

ENDPOINTS
1. Create a New Person
           - Endpoint: /api
           - HTTP Method: POST
           - Description: Create a new person resource.
           - Request Format: JSON
           - Request Body:

                    {
                    "name": "John Doe",
                    "age": 30
                    }

            - Response Format: JSON
            - Success Response (201 Created):
                    {
                    "name": "John Doe",
                    "age": 30,
                    "_id": "5fcb12345678901234567890"  // Unique person ID
                    }


2. Read a Person by ID
            - Endpoint: /api/{person_id}
            - HTTP Method: GET
            - Description: Retrieve details of a person by their ID.
            - Response Format: JSON
            - Success Response (200 OK):
       
                    {
                    "name": "John Doe",
                    "age": 30,
                    "_id": "5fcb12345678901234567890"  // Unique person ID
                    }

            - Error Response (404 Not Found):
          
                    {
                    "error": "Person not found"
                    }


3. Update a Person by ID
           - Endpoint: /api/{person_id}
           - HTTP Method: PUT
           - Description: Modify details of an existing person by their ID.
           - Request Format: JSON
           - Request Body:
           
                    {
                    "name": "Updated Name",
                    "age": 35
                    }
           - Response Format: JSON
           - Success Response (200 OK):
         
                {
                "name": "Updated Name",
                "age": 35,
                "_id": "5fcb12345678901234567890"  // Unique person ID
                }
            - Error Response (404 Not Found):

                {
                "error": "Person not found"
                }


4. Delete a Person by ID
            - Endpoint: /api/{person_id}

            - HTTP Method: DELETE

            - Description: Remove a person by their ID.

            - Response Format: No content (204 No Content)

            - Success Response (204 No Content): No response body

            - Error Response (404 Not Found):

                        {
                        "error": "Person not found"
                        }
#Sample Usage

Create a New Person
        - Request:
            http
            POST /api
            Content-Type: application/json
                {
                "name": "Jane Smith",
                "age": 25
                }
        - Response (201 Created):
            {
            "name": "Jane Smith",
            "age": 25,
            "_id": "5fcb56789012345678901234"
            }


Read a Person by ID
        - Request:

            http
            Copy code
            GET /api/5fcb56789012345678901234
        - Response (200 OK):
            {
            "name": "Jane Smith",
            "age": 25,
            "_id": "5fcb56789012345678901234"
            }

Update a Person by ID
        - Request:
            http
            Copy code
            PUT /api/5fcb56789012345678901234
            Content-Type: application/json

            {
            "name": "Updated Name",
            "age": 30
            }
        - Response (200 OK):


            {
            "name": "Updated Name",
            "age": 30,
            "_id": "5fcb56789012345678901234"
            }
Delete a Person by ID
        - Request:
            http
            Copy code
            DELETE /api/5fcb56789012345678901234
        - Response (204 No Content): No response body

LIMITATIONS AND ASSUMPTIONS
This API assumes that a person's name and age are the only required fields when creating or updating a person. Other fields or validations may be added as needed.
Error responses include a JSON message to describe the error.


SETUP INSTRUCTIONS
Clone the repository:
git clone <your-repo-url>
cd person-api
Install dependencies:

npm install
Create a .env file in the project root directory and add your MongoDB URI:
dotenv

MONGODB_URI=mongodb://localhost/your-database-name
Start the Node.js server:

node app.js
Your API should now be running locally at http://localhost:3000. You can use the provided endpoint URIs to test the API using tools like Postman or curl.
