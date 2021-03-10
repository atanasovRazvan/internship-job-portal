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
          },
          rating,
        }
      }
    }
`;

export const GET_JOB = gql`
    query GetJob($id: Int!){
      job(id: $id){
        id,
        name,
        description,
        isAvailable,
        company{
          name,
          contactInfo{
            email,
            phone,
            city,
            country{
              name
            },
            website,
            avatarUrl,
            about,
          },
        },
        jobSkills{
          skill{
            id,
            name,
          },
          rating,
        },
        jobRequirements{
          name,
        },
        jobBenefits{
          name,
        },
      }
    }
`;
