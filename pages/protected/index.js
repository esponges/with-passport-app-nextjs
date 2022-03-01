import Layout from "../../components/layout";
import { useUser } from "../../lib/hooks";

function Protected() {
  useUser({ redirectTo: "/" });

  return (
    <>
      <Layout>
        <h1>Protected</h1>
        <p>
          This is a protected page. You must be logged in to view this page.
        </p>
        <style jsx>{`
          h1 {
            color: red;
          }
        `}</style>
      </Layout>
    </>
  );
}

export default Protected;