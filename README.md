This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Test Instructions

Create a UI that will fetch and display Formula 1 seasons and their standings using this API.

https://api-sports.io/documentation/formula-1/v1#section/Introduction

You can use this wireframe which you should follow closely.

https://www.figma.com/file/mp8jn2RafFut3hu5ETibS6/Developer-Test-Task?type=design&node-id=204-336&mode=design

The app should fetch the list of available seasons and display them as a set of buttons aligned horizontally. When a user clicks on one of the seasons, fetch the standings of the season rankings and display them as a table.

In Formula 1 there are 2 championships per season; one for drivers and one for teams. Display a switch in the UI that will switch between driver and team championships by fetching data from the appropriate endpoint. The driver's championship should be the default.

For teams, table data should be sorted by position and should have columns for the position, team name, logo and points.

For drivers, the table data should also be sorted by position and should have columns for the position, driver name, image, number and points.

Feel free to use any UI library of your choice.

Please email a Github link to your complete (or partially completed) work to hannah.barnes@plume.co.uk, preferably set so our developers can review without requesting permissions. In your email, note the time spent, and mention what you would have done if you had more time (as we’ll consider this in our assessments).
