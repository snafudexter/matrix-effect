let headers = new Headers({"Content-Type": 'text/html'});

fetch('https://codifyinditest.com/script_test/api-test',{
    headers,
    credentials: 'same-origin'
}).then(function(response){
    console.log('response', response)
})