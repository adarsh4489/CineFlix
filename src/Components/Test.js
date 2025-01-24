

export const loginValidation=(email,password)=>{
const isEmailValid=/[^@]+@[^@]+\.[^@]+$/.test(email);   
const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

if(!isEmailValid) return "Email is not valid"
else if(!isPasswordValid) return "Password is not Valid it should contain a symbol,an uppercase letter, an lowercase,a number"

return null

}