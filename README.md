<h1 class="header">
             API: Url Shortener Microservices 
        </h1>
        <blockquote>
            User Stories:
              <ul>1) I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.</ul>
              <ul>2) If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.</ul>
              <ul>3) When I visit that shortened URL, it will redirect me to my original link.</ul>
         </blockquote>
        <h3>Example usage:</h3>
         <pre><code>https://url-shortener-muideen.glitch.me/new/https://www.google.com</code></pre>
         <pre><code>https://url-shortener-muideen.glitch.me/11</code></pre>
        <h3>Example Output:</h3>
        <pre><code>
          {
            "shortUrl":"http//url-shortener-muideen.glitch.me/10",
            "originalUrl":"https://www.google.com"
          }
         </code></pre>
         
         
         
 You can view the live demo here: https://url-shortener-muideen.glitch.me
         
        
