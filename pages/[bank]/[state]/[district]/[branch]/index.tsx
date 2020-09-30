import { Heading, Box, SimpleGrid, Text } from "@chakra-ui/core";
import axios from "axios";
import dbConnect from "../../../../../utils/dbConnects";
import branchx from "../../../../../model/branchModel";
import { Flex} from "@chakra-ui/core";
import { useRouter } from "next/dist/client/router";
const Index = (data) => {
  const router = useRouter()
  const branchDetails = JSON.parse(data.newdata);
  console.log(router.query.bank)
//   const {bank,state,district,branch} = router.query;
  return (
      <Flex justify="center">
          
          <Box >
          {branchDetails['iFSCCode']}
        {
            Object.keys(branchDetails).map((value,index)=>(
                <p key={index}>
                    {value.toUpperCase()} :- {branchDetails[value]}
                </p>
            ))
        }
          </Box>  
       
    </Flex>
  );
};

export async function getServerSideProps(context: any) {
  await dbConnect();

//   const dataBranch = await branch.distinct("bank");
const {bank,state,district,branch} = context.params;
  const branchData = await branchx.find({bank:bank,state:state,district:district,branch:branch})
  const newdata = JSON.stringify(branchData[0])
  console.log(branchData);
  console.log(context.params.branch)
  console.log(process.env.PASSWORD)
  // console.log("getServerProps", res, context.params, context.query);
  return {
    props: { newdata },
  };
}
export default Index;
