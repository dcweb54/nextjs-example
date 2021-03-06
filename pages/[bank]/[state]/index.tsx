import axios from "axios";
import dbConnect from "../../../utils/dbConnects";
import branch from "../../../model/branchModel";
import { Select, Flex, Box } from "@chakra-ui/core";
import { useRouter } from "next/dist/client/router";
const Index = (data) => {
  const router = useRouter();
  console.log(router.query.bank);
  const { bank, state } = router.query;
  return (
    <Flex justify="center">
      <Box w="450px">
        <Select
          placeholder="Select bank"
          onChange={(e) => {
            router.push(`/${bank}/${state}/${e.target.value}`);
            //  window.location.assign(`/district/${selectx}`)
          }}
        >
          {data.districtData.map((value, index) => (
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
  const { bank, state } = context.params;
  const districtData = await branch.distinct("district", {
    bank: bank,
    state: state,
  });
  console.log(districtData);
  console.log(context.params.state);
  // console.log("getServerProps", res, context.params, context.query);
  return {
    props: { districtData },
  };
}
export default Index;
