let headers = new Headers({"Content-Type": 'text/html'});
headers.append('Access-Control-Allow-Origin','https://codifyinditest.com')

fetch('https://codifyinditest.com/script_test/api-test/',{
    headers,
    credentials: 'same-origin'
}).then(function(response){
    console.log('response', response)
})