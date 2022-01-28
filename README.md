# Image-Processing-Api
This Project is required by Egfwd / Udacity scholarship .
You should be able to delete your thumbnail images and see them recreated when accessing the appropriate endpoints.

## To build and run the code 
Open the terminal/cmd in Image-Processing-Api folder and run the following command => npm start .

Now that the server is running you can access various endpoint in this project there is two main endpoints preview/ and resize/ . 

### To preview an image named fjord.jpg with it's original size 
Use the following url => http://localhost:3000/preview?filename=fjord
### To resize an image named fjord.jpg with size 500 * 500 
Use the following url => http://localhost:3000/resize?filename=fjord&width=500&height=500


## To perform testing using jasmine and supertest
Open the terminal/cmd in Image-Processing-Api folder and run the following command => npm test .

