import axios from 'axios';

export const registration = async (email, password) => {
  try {
    const response = await axios.post(`https://localhost:5000/api/auth/registration`, {
      email,
      password
    })

    console.log(response.data.message)
  } catch (e) {
    console.log(e)
  }
}
