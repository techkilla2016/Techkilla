import axios from "axios";

const useCreateUser = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/user/create",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default useCreateUser;
