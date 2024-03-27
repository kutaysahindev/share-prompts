# Next.js 14 AI Prompt Sharing Application

A minimalistic Figma clone to demonstrate real-world features such as live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using fabric.js.

<p align="center">
  <img src="https://github.com/kutaysahindev/figma-clone/assets/79334889/0d80264a-72d3-4844-9a48-859f226812bb" alt="Screenshot">
</p>

## Live Demo

Check out the live demo [here](https://figma-clone-bay.vercel.app/).

## Tech Stack

- Next.js
- Javascript
- MongoDB
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
git clone
cd
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

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from [Google Cloud Console](https://console.cloud.google.com/welcome?rapt=AEjHL4MBaLLneW6OfAHf_zgms1eWZFw1wdy0_KIC4uh1nEqh2m4ojOvrXNlzJ4h7CZTkpiWgcsoHbUvS-FMdCP7WIkaVlPAeU7cnVR6Y0wJHeLMOtU6KAzA&project=promptopia-385410), [Cryptpool](https://www.cryptool.org/en/cto/openssl) (for random Auth Secret), and [MongoDB](https://www.mongodb.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
