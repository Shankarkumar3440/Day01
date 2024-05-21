// How do you decode or encode a URL in JavaScript?


// Encoding 
// encodeURIComponent: This function is used to encode individual components of a URL.It replaces special characters with their UTF - 8 encoded representation, making it safe to include in a URL query string.

const param = 'name=John Doe&age=30';
const encodedParam = encodeURIComponent(param);
console.log(encodedParam); // Outputs: name%3DJohn%20Doe%26age%3D30


// encodeURI: This function is used to encode an entire URL. It keeps the URL structure intact (e.g., :, /, ?, # remain unchanged) while encoding other characters.
const url = 'https://www.example.com/page?name=John Doe&age=30';
const encodedURL1 = encodeURI(url);
console.log(encodedURL); // Outputs: https://www.example.com/page?name=John%20Doe&age=30


// Decode url
// decodeURIComponent: This function decodes a URL component that was encoded using encodeURIComponent.

const encodedParam1 = 'name%3DJohn%20Doe%26age%3D30';
const decodedParam = decodeURIComponent(encodedParam);
console.log(decodedParam); // Outputs: name=John Doe&age=30

// decodeURI: This function decodes an entire URL that was encoded using encodeURI.
const encodedURL = 'https://www.example.com/page?name=John%20Doe&age=30';
const decodedURL = decodeURI(encodedURL);
console.log(decodedURL); // Outputs: https://www.example.com/page?name=John Doe&age=30




// encodeURIComponent vs.encodeURI:

// Use encodeURIComponent when you need to encode a part of a URL(e.g., query parameters).
// Use encodeURI when you need to encode a complete URL.
// decodeURIComponent vs.decodeURI:

// Use decodeURIComponent to decode a component encoded with encodeURIComponent.
// Use decodeURI to decode a complete URL encoded with encodeURI.
    
// Encoding and Decoding a URL Component
const queryParam = 'name=John Doe&city=New York';
const encodedQueryParam = encodeURIComponent(queryParam);
console.log(encodedQueryParam); // Outputs: name%3DJohn%20Doe%26city%3DNew%20York

const decodedQueryParam = decodeURIComponent(encodedQueryParam);
console.log(decodedQueryParam); // Outputs: name=John Doe&city=New York


// Encoding and Decoding a Complete URL
const url1 = 'https://www.example.com/search?name=John Doe&city=New York';
const encodedURL2 = encodeURI(url);
console.log(encodedURL); // Outputs: https://www.example.com/search?name=John%20Doe&city=New%20York

const decodedURL2 = decodeURI(encodedURL);
console.log(decodedURL); // Outputs: https://www.example.com/search?name=John Doe&city=New York
