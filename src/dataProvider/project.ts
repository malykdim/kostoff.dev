import axiosInstance from "../config/axios";

export async function getAllProjects() {
    const apiUrl = '/classes/Project';

    try {
        const response = await axiosInstance.get(
            apiUrl,
            {
                headers: {
                  'X-Parse-Application-Id': import.meta.env.VITE_X_PARSE_APP_ID,
                  'X-Parse-REST-API-Key': import.meta.env.VITE_X_PARSE_REST_API_KEY,
                  'X-Parse-Revocable-Session': '1',
                },
            }      
        );

        return response.data.results; // 200 OK, a JSON object that contains a results field with a JSON array that lists the objects.

    } catch (error) {
        console.error(error);
        return [];    
    }
}

export async function createNewProject(body: {}) {
    const apiUrl = '/classes/Project';

    try {
        const response = await axiosInstance.post(
            apiUrl,
            {
                headers: {
                  'X-Parse-Application-Id': import.meta.env.VITE_X_PARSE_APP_ID,
                  'X-Parse-REST-API-Key': import.meta.env.VITE_X_PARSE_REST_API_KEY,
                  'Content-Type': 'application/json',
                },
            },
            body     
        );

        return response.data.results; // 201 Created, headers > Location: https://parseapi.back4app.com/classes/Project/MyNewObjectId, body > A JSON document with the objectId and createdAt fields of the newly-created object.

    } catch (error) {
        console.error(error);
        return [];    
    }
}

export async function updateProject(id: string, body: {}) {
    const apiUrl = `/classes/Project/${id}`;

    try {
        const response = await axiosInstance.put(
            apiUrl,
            {
                headers: {
                  'X-Parse-Application-Id': import.meta.env.VITE_X_PARSE_APP_ID,
                  'X-Parse-REST-API-Key': import.meta.env.VITE_X_PARSE_REST_API_KEY,
                  'Content-Type': 'application/json',
                },
            },
            body     
        );

        return response.data.results; // 200, OK, a JSON object that contains a updatedAt field with the timestamp of the update.

    } catch (error) {
        console.error(error);
        return [];    
    }
}

export async function deleteProject(id: string) {
    const apiUrl = `/classes/Project/${id}`;

    try {
        const response = await axiosInstance.delete(
            apiUrl,
            {
                headers: {
                  'X-Parse-Application-Id': import.meta.env.VITE_X_PARSE_APP_ID,
                  'X-Parse-REST-API-Key': import.meta.env.VITE_X_PARSE_REST_API_KEY,
                },
            },
        );

        return response.data.results; //  200, OK, {}

    } catch (error) {
        console.error(error);
        return [];    
    }
}

/* 
{
  "results": [
    {
      "objectId": "zJxVP17mTi",
      "createdAt": "2018-10-31T14:16:13.616Z",
      "updatedAt": "2018-11-07T12:12:20.758Z",
      "name": \"A string\","image": \"A string\","link": \"A string\","description": \"A string\","tags": \"A string\"
    },
    {
      "objectId": "yDbv0gKGJR",
      "createdAt": "2018-10-31T14:16:42.811Z",
      "updatedAt": "2018-11-07T12:12:18.543Z",
      "name": \"A string\","image": \"A string\","link": \"A string\","description": \"A string\","tags": \"A string\"
    },
    {
      "objectId": "xKue915KBG",
      "createdAt": "2018-11-07T12:11:58.533Z",
      "updatedAt": "2018-11-07T12:12:15.413Z",
      "name": \"A string\","image": \"A string\","link": \"A string\","description": \"A string\","tags": \"A string\"
    }
  ]
}
*/