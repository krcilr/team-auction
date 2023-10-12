import type { HandlerEvent, HandlerContext, Handler } from "@netlify/functions";
import { schedule } from "@netlify/functions";
import { fetchNflTeamWins } from "../../utils/api-helpers";

const myHandler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  try {
    
    const successful = await fetchNflTeamWins();

    console.log('---===UPDATE NFL TEAMS===---');
    console.log(successful);

    return {
      statusCode: 200,
      body: JSON.stringify({  }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

const handler = schedule("0 0 * * 2", myHandler);

export { handler };
