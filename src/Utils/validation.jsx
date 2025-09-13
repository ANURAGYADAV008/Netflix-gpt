const ValidationData=(email,password,name)=>{
    const isEmailValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     
    if(!isEmailValid){
        return "Email ID is not Valid"
    }

    if(!isPasswordValid) return "Password is Not Valid"

    if(name==="")return "Enter Name";

    return null;


}
export default ValidationData