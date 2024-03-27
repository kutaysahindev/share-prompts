import Head from "next/head";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <Head>
      <link
        rel="shortcut icon"
        href="../public/assets/favicon.ico"
        type="image/x-icon"
      />
      <link
        rel="icon"
        href="../public/assets/favicon.ico"
        type="image/x-icon"
      />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Head>
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
