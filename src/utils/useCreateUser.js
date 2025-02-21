import axios from "axios";

const createUser = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/techkilla-user/create`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default createUser;
