import axios from 'axios'

export function getUserDataInit(){
    const info = JSON.parse(sessionStorage.getItem('data_user'));
    return info;
};

export function viewDataInfo(){
    const info = JSON.parse(sessionStorage.getItem('user_info'));
    return info;
};

export function clearSessionStorage(){
    sessionStorage.clear();
};


export function getPort(){

    axios
    .get('/adminPortDeploy')
    .then(response => {
        let port = response.data.test
        console.log('port API => ' + port)
        
        return port;
    })
    .catch(err => {
        console.log('err')
        console.log(err)
        
        return null;
    })
}