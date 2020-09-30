import { Heading, Box, SimpleGrid, Text } from "@chakra-ui/core";
import axios from "axios";
import dbConnect from "../../utils/dbConnects";
import branch from "../../model/branchModel";
import { Select } from "@chakra-ui/core";
import { useRouter } from "next/dist/client/router";
const Index = (data) => {
  const router = useRouter()
  console.log(router.query.bank)
  const {bank} = router.query
  return (
    <div>
      <h2> WELCOME TO IFSC  CODE</h2>      
      <Select placeholder="Select bank" onChange={(e)=>{
          router.push(`/${bank}/${e.target.value}`)
        //  window.location.assign(`/district/${selectx}`)
      }} >
        {data.stateData.map((value,index)=>(
            <option key={index} value={value}>{value}</option>
        ))}
      </Select>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  await dbConnect();

//   const dataBranch = await branch.distinct("bank");
  const {bank} = context.params
  const stateData = await branch.distinct("state",{bank:bank})
  console.log(stateData);
  console.log(context.params.bank)
  // console.log("getServerProps", res, context.params, context.query);
  return {
    props: { stateData },
  };
}
export default Index;
