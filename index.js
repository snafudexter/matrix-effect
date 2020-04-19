fetch('https://codifyinditest.com/script_test/api-test',{
    credentials: 'include',
    redirect: 'follow'
}).then(function(response){
    console.log('response', response)
})