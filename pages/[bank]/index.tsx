import axios from "axios";
import dbConnect from "../../utils/dbConnects";
import branch from "../../model/branchModel";
import { Select, Flex, Box } from "@chakra-ui/core";
import { useRouter } from "next/dist/client/router";
const Index = (data) => {
  const router = useRouter();
  console.log(router.query.bank);
  const { bank } = router.query;
  return (
    <Flex justify="center">
      <Box w="450px">
        <Select
          placeholder="Select bank"
          onChange={(e) => {
            router.push(`/${bank}/${e.target.value}`);
            //  window.location.assign(`/district/${selectx}`)
          }}
        >
          {data.stateData.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </Box>
    </Flex>
  );
};

export async function getServerSideProps(context: any) {
  await dbConnect();

  //   const dataBranch = await branch.distinct("bank");
  const { bank } = context.params;
  const stateData = await branch.distinct("state", { bank: bank });
  console.log(stateData);
  console.log(context.params.bank);
  // console.log("getServerProps", res, context.params, context.query);
  return {
    props: { stateData },
  };
}
export default Index;
