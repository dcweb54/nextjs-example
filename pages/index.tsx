import axios from "axios";
import dbConnect from "../utils/dbConnects";
import branch from "../model/branchModel";
import { Select,Flex,Box } from "@chakra-ui/core";
import { useRouter } from "next/dist/client/router";
const Index = (data) => {
  const router = useRouter()
  console.log(router.route)
  return (
    <Flex justify="center">
 
    
    <Box w="450px">
      <h2> WELCOME TO IFSC  CODE</h2>      
      <Select placeholder="Select bank" onChange={(e)=>{
          router.push(`/${e.target.value}`)
        //  window.location.assign(`/district/${selectx}`)
      }} >
        {data.bankNameData.map((value,index)=>(
            <option key={index} value={value}>{value}</option>
        ))}
      </Select>
    </Box>
    </Flex>
  );
};

export async function getServerSideProps(context: any) {
  await dbConnect();

  console.log(process.env.MONGO_DB)
  console.log(process.env.MONGO_URL)

  const bankNameData = await branch.distinct("bank");
  console.log(bankNameData);
  // console.log("getServerProps", res, context.params, context.query);
  return {
    props: { bankNameData },
  };
}
export default Index;
