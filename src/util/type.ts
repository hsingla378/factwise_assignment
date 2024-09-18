// Celebrity interface
export interface Celebrity {
  id: number;
  first: string;
  last: string;
  dob: string;
  gender: string;
  email: string;
  picture: string;
  country: string;
  description: string;
}

// Define the initial state from the constant file
export interface CelebritiesState {
  celebrities: Celebrity[];
}
