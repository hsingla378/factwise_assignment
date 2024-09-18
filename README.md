# FactWise Assignment

This project is a React-based user interface that implements a visual reference for managing user data with features like searching, editing, and deleting records. It uses Redux for state management and includes components for viewing, updating, and removing users, following a design provided in the visual reference.

[Assignment Reference](https://github.com/hsingla378/factwise_assignment/blob/master/Assessment%20Design.png)

[Live App](https://factwise-assignment-hs.vercel.app/)

## Features

- **User Card**: Displays user details with options to view, edit, and delete.
- **Search Bar**: Allows filtering users by name.
- **Edit Functionality**: Supports in-place editing of user details.
- **Delete Confirmation Modal**: Confirms before deleting a user entry.
- **Responsive Layout**: Works on multiple screen sizes.
- **Toast Notifications**: Feedback after performing actions (editing or deleting a user).

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Redux Toolkit**: For managing global state.
- **TypeScript**: Ensures type safety across the application.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Vite**: Fast build tool for serving the application.
- **react-icons**: For including icon packs.
- **react-hot-toast**: Provides toast notifications.

## Visual Reference

The application follows a specific UI/UX design with multiple states like closed, open, edit, and delete confirmation. You can find the design specifications in the file `Assessment Design.png`.

## Setup Instructions

### 1. Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Vite](https://vitejs.dev/)

### 2. Installation

1. Clone the repository:

```bash
git clone https://github.com/hsingla378/factwise_assignment
cd factwise_assignment
```

2. Install the dependencies:

```bash
npm install
```

### 3. Run the Application

To run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### 4. Build for Production

To create a production build:

```bash
npm run build
```

### 5. Preview the Build

To preview the production build locally:

```bash
npm run preview
```

## File Structure

```bash
src/
├── components/        # React components
│   ├── DeleteModal.tsx      # Modal component for confirming deletion
│   ├── Header.tsx           # Header component of the application
│   ├── UserCard.tsx         # Main component for user card UI
│   ├── UserList.tsx         # Component to handle user listing and search
├── pages/
│   ├── Landing.tsx          # Main landing page containing header and user list
├── util/
│   ├── store.ts             # Redux store configuration
│   ├── celebritiesSlice.ts  # Redux slice for managing user state
│   ├── type.ts              # TypeScript types for user data
│   └── constant.ts          # Constants, like helper functions
├── index.css                # Global CSS styles
├── App.tsx                  # Root React component
└── main.tsx                 # Main entry point
```

## Redux Flow

- **State**: The state is managed in a global store using Redux.
- **Actions**:
  - `deleteCelebrity`: Removes a user from the state.
  - `editCelebrity`: Updates the details of a user.
- **Selectors**: The list of users is retrieved using the Redux `useSelector` hook in `UserList.tsx`.

## How to Use

1. **View Users**: Users are displayed in a list on the main page. Each user has a card with details such as name, age, gender, and country.
2. **Search Users**: Use the search bar to filter users by their name.
3. **Edit Users**: Click the edit icon (✏️) to modify the user's details. Once done, click "Save" to save changes or "Cancel" to discard changes.
4. **Delete Users**: Click the delete icon (🗑️) to open the delete confirmation modal. Confirm deletion by clicking "Delete", or close the modal by clicking "Cancel".

## Dependencies

The project uses the following npm packages:

- **@reduxjs/toolkit**: For managing application state.
- **react**: For building the user interface.
- **react-dom**: For rendering React components to the DOM.
- **react-hot-toast**: For toast notifications.
- **react-icons**: For displaying icons.
- **react-redux**: For binding Redux to React.
- **vite**: Build tool for fast development and production builds.

## Dev Dependencies

- **eslint**: For maintaining code quality.
- **typescript**: Adds type safety to JavaScript code.
- **tailwindcss**: CSS framework for utility-based styling.
- **vite**: Build tool used to run the project.

## Screenshots

### Landing

![image](https://github.com/user-attachments/assets/47e5d7b3-ab82-4322-9f96-8d2951e51f51)

### Search (Debouncing)

![image](https://github.com/user-attachments/assets/57e3bfc8-e54d-4bca-8ed2-7837bbd37590)

### User Details

![image](https://github.com/user-attachments/assets/0db5a400-023c-4981-a31a-16d2ba6bfda9)

### Delete Modal

![image](https://github.com/user-attachments/assets/394368bb-cb37-4da4-aed0-70f59e716a14)

![image](https://github.com/user-attachments/assets/af3eb52a-67bf-492e-bce9-e9992851e9d2)

### Edit 

![image](https://github.com/user-attachments/assets/85b2671b-ee1a-4a13-88c5-f701e5504399)

![image](https://github.com/user-attachments/assets/34f0ecda-d5be-4e9d-b464-909925afe7cc)

### Responsive

![image](https://github.com/user-attachments/assets/3ace8d20-a0a7-49ca-8640-b6764c647722)
