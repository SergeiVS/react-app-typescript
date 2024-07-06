export interface User {
  firstName: string;
  lastName: string;
  occupation: string;
  hobbies: string[];
  avatarUrl: string;
}

export interface CardProps {
  user: User;
}
