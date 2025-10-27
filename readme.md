>> this is a simple website wher user can access 
>> home 
        A simple home page 
>>menu 
        Where user can see the menu of the restrorent
>>contact 
        Where user can see the contacct of the restrorent
>>about 
        Where user can see the story of the restrorent
>>fotter 
>>header


>> How It Works
    1. Reads incoming requests using Node.js http.createServer().
    2. For each route (like /home, /about, /contact), it serves the corresponding HTML file.
    3. CSS files are detected automatically by checking if the request ends with .css.
    4. All files are read using the fs.readFile() function and sent with appropriate content types.
    5. The 404.html page is shown for any route that doesn’t match.


>>  How to Run

1. Install Node.js (if not installed).
2. Open the project folder in your terminal.

3. Run the following command to install dependencies:
>> npm install
4. Start the server using:
>>npm run dev


5. Open your browser and visit:

    http://localhost:3000
     To open about page specific, you can go 
        http://localhost:3000/about


        To open header page specific you can go
        http://localhost:3000/header

        
        To open menu page specific, you can go
        http://localhost:3000/menu

        
        To open contact page specific, you can go
        http://localhost:3000/contact

        
        To open footer page specific ,you can go
        http://localhost:3000/footer

        
        To open header page specific, you can go
        http://localhost:3000/header

        

        
