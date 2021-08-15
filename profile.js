
firebase.auth().onAuthStateChanged((user)=>{

    if(user){
        var uid = user.uid;
        firebase.database().ref(`users/${uid}`).once('value', (data)=>{
            let username = document.getElementById("username");
            let email = document.getElementById("email")
            username.innerHTML = data.val().username
            email.innerHTML = data.val().email
            console.log(data.val())
        })
    }else{
        window.location = "index.html"
    }
});



let logout = () => {
    firebase.auth().signOut()
    .then(()=>{
        localStorage.removeItem('uid')
        window.location= "login.html";
    })
}