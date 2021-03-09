import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Login{
    users{
      username
      password
    }
  } 
`;

export const CREATE_USER = gql`
  mutation Register($username: String!, $firstName: String!, $lastName: String!, $password: String!){
    createUser(username: $username, 
      firstName: $firstName, 
      lastName: $lastName, 
      password: $password,
      userRoleId: 3){
         username,
      }
}
`;

export const GET_JOBS = gql`
    query Jobs{
      jobs{
        id,
        name,
        description,
        company{
          name,
        }
        jobSkills{
          skill{
            id,
            name,
          }
        }
      }
    }
`;
