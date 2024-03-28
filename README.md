# Promptopia - AI Prompt Sharing Application

This project utilizes Next.js, MongoDB, NextAuth, and TailwindCSS to create a modern web platform where users can discover, create, and share AI prompts, featuring a sleek glassmorphism design, user profiles, prompt management, tag-based search, Google authentication, and full responsiveness.

<p align="center">
  <img alt="image" src="https://github.com/kutaysahindev/share-prompts/assets/79334889/d5a4cba6-50fe-41e9-91a3-13fd6316fc93">
</p>

## Live Demo

Check out the live demo [here](https://share-prompts-nu-liard.vercel.app/).

## Tech Stack

- Next.js
- MongoDB
- Javascript
- TailwindCSS
- NextAuth

## Features

- **Discover and Share AI Prompts**: Explore prompts from the community and share your own creations effortlessly.
- **Edit and Delete Prompts**: Customize your prompts anytime and remove them when necessary.
- **Explore Creator Profiles**: Connect with other creators by browsing their profiles and exploring their shared prompts.
- **Tag-Based Prompt Search**: Easily find prompts related to specific topics with tag-based search functionality.
- **Secure Google Authentication**: Enjoy a trustworthy login experience with secure Google authentication powered by NextAuth.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/kutaysahindev/share-prompts.git
cd share-prompts
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from [Google Cloud Console](https://console.cloud.google.com/), [Cryptpool](https://www.cryptool.org/en/cto/openssl) (for random Auth Secret), and [MongoDB](https://www.mongodb.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
