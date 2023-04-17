import axios from "axios";

const loginApi = async ({ email, password }) => {
    try {
        const response = await axios.post(
            "https://learngatsby.wpengine.com/graphql/",
            {
                query: `
        mutation LoginUser($username: String!, $password: String!) {
          login(input: {
            clientMutationId: "uniqueId",
            username: $username,
            password: $password
          } ) {
            authToken
            user {
              id
              name
            }
          }
        }
      `,
                variables: {
                    username: email,
                    password,
                },
            }
        );

        const { authToken } = response.data.data.login;
        return { success: true, authToken };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error:
                error.response?.data?.errors?.[0]?.message ||
                "An error occurred",
        };
    }
};

export default loginApi;
