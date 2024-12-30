# Crowd Fund Raising

## Features

- **Secure user authentication** with Firebase: registration, login, and logout functionalities.
- **Context API** is used for managing user state across the application.
- **Protected routes** ensure that only authenticated users can access certain pages.

## Campaign Management

- Users can view all active campaigns in a tabular format with relevant details.
- Campaigns display crucial information, including the deadline, campaign description, and donation amount.
- Users can sort campaigns by donation amounts (ascending or descending).

## Donation Process

- Users can donate to live campaigns by providing their donation amounts and personal details.
- The donation data is sent to a backend API and stored in a donation collection in the database.
- If the campaign deadline is past, the donation button is disabled and an informative toast notification is shown.

## Responsive User Interface

- The app is fully responsive, designed with Tailwind CSS and Daisy UI.
- The UI dynamically adjusts based on the device being used (mobile, tablet, desktop).

## Theme Toggle

- Dark/Light theme toggling functionality using Daisy UI’s Theme Controller with Context API, allowing users to switch between themes seamlessly.

## User Dashboard

- Users can manage their personal details, view their past donations, and keep track of their participation in campaigns.
- Donations can be filtered by campaign type, amount, or status.

## Technologies Used

| Technology     | Description                                |
| -------------- | ------------------------------------------ |
| React          | JavaScript library for building interfaces |
| Firebase Auth  | Secure user authentication                 |
| Tailwind CSS   | CSS framework for UI design                |
| Daisy UI       | Tailwind CSS components                    |
| React Router   | Routing library for React                  |
| Context API    | State management in React                  |
| React Toastify | Toast notifications                        |
| Node.js        | Backend JavaScript runtime                 |
| Express.js     | Web application framework for Node.js      |
| MongoDB        | NoSQL database                             |

## Usage

### Creating a Campaign:

1. Go to the "Add New Campaign" page, fill out the campaign details, and submit it.
2. Once the campaign is added, it will be visible to all users in the "All Campaigns" section.

### Donating:

1. Browse through active campaigns, select a campaign, and donate using the "Donate Now" button.
2. Ensure the campaign's deadline is still active; if not, you will be shown a message.

### User Authentication:

- Register or log in to track your donations, create campaigns, and access protected routes.
- Logout whenever you're done using the platform.

### Theme Toggle:

- You can toggle between light and dark themes using the theme controller button in the navbar.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Clone your forked repository.
3. Create a new branch for your changes (`git checkout -b feature-branch`).
4. Make your changes and commit them (`git commit -am 'Add new feature'`).
5. Push your changes to your fork (`git push origin feature-branch`).
6. Open a pull request to the original repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
