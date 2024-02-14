import Image from "next/image"
import { GetServerSideProps } from "next"
import { connectToDatabase } from "../../db"


export const getServerSideProps: GetServerSideProps = async () => {
    const connection = await connectToDatabase();
  
    const [results] = await connection.query('SELECT * FROM public_events');
    await connection.end();

    return {
      props: {
        public_events: results
      }
    };
  };
  
  const Page = ({  }) => {
    return (
      <div>
        
      </div>
    );
  };
  
  export default Page;

