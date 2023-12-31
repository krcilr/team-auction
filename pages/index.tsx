import Head from "next/head";
import { Flex, Box } from "@chakra-ui/react";
import HomepageContainer from "../components/homepage-container";
import Footer from "../components/footer";
import { getOwnersTeams } from "../utils/supabase-client";
import { Owner } from "../types/owner";

interface HomeProps {
  owners: Owner[];
}

const Home: React.FC<HomeProps> = ({ owners }) => {
  if (!owners) return <div>Loading...</div>;

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Head>
        <title>Team Auction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex dir={"column"} p={[2, 10]} flex="1" w={"100%"}>
          <HomepageContainer owners={owners} />
        </Flex>
      </main>

      <Footer />
    </Box>
  );
};

export default Home;

export async function getServerSideProps() {
  const owners = await getOwnersTeams();

  if (owners.error) {
    console.warn("couldn't get owners", owners.error);
    return {
      props: {
        owners: [],
      },
    };
  }

  return {
    props: {
      owners: owners.data as Owner[],
    },
  };
}
