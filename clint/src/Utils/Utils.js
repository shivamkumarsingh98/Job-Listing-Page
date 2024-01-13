const [isLoggedIn, setIsLoggedIn] = useState(!!window.localStorage.getItem("user"))
const handleLogout = ()=>{
    window.localStorage.removeItem("user")
    window.localStorage.removeItem("name")
    window.localStorage.removeItem("token")
    setIsLoggedIn(!!window.localStorage.getItem("user"))
    window.location.reload();

}
const handelLogin =()=>{
    const recruiterName = window.localStorage.getItem("name")
    setIsLoggedIn(recruiterName)
}