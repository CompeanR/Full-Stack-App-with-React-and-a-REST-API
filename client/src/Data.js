// Import statements
import config from './config';

export default class Data {
  // Method that let us manage our API request with specific options
  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {

    // The config.apiBaseUrl is equivalent to http://localhost:5000/api
    const url = config.apiBaseUrl + path;
    
    // Headers of our request
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    // If the request has body value convert it to json
    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    // If the request requires authorization encrypt the credentials
    if (requiresAuth) {
      const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`)

      options.headers['Authorization'] = `Basic ${encodedCredentials} `;
    }

    return fetch(url, options);
  }

  // Method that generates a GET request to the API
  async getUser(emailAddress, password) {
    const response = await this.api(`/users`, 'GET', null, true, { emailAddress, password });

    // If the response is successful return the user data
    if (response.status === 200) {
      return response.json().then(data => data);
    }

    // If the response is unsuccessful return an unauthorized response
    else if (response.status === 401) {
      return null;
    }

    else {
      throw new Error();
    };
  };
  
  // Method that generates a POST request to create a new user
  async createUser(user) {
    const response = await this.api('/users', 'POST', user);

    // If the response is successful create the new user
    if (response.status === 201) {
      return [];
    }

    // If the response is unsuccessful return a bad request response
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }

    else {
      throw new Error();
    };
  };

  // Method that generates a POST request to create a new course
  async createCourse(course, emailAddress, password) {
    const response = await this.api('/courses', 'POST', course, true, { emailAddress, password });

    // If the response is successful create a new course
    if (response.status === 201) {
      return [];
    }

    // If the response is unsuccessful return a bad request response
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }

    else {
      throw new Error();
    };
  };

  // Method that generates a PUT request to update a course
  async updateCourse(course, emailAddress, password, id) {
    const response = await this.api(`/courses/${id}`, 'PUT', course, true, { emailAddress, password });

    // If the response is successful update the course
    if (response.status === 204) {
      return [];
    }

    // If the response is unsuccessful return a bad request response
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }

    else {
      throw new Error();
    };
  };

  // Method that generates a DELETE request
  async deleteCourse(emailAddress, password, id) {
    const response = await this.api(`/courses/${id}`, 'DELETE', null, true, { emailAddress, password });

    // If the response is successful delete the course
    if (response.status === 204) {
      return [];
    }

    // If the response is unsuccessful return a bad request response
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }

    else {
      throw new Error();
    }
  };
};


