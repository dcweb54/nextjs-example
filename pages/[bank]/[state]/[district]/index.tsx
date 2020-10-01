import axios from "axios";
import dbConnect from "../../../../utils/dbConnects";
import branch from "../../../../model/branchModel";
import { Select, Flex, Box } from "@chakra-ui/core";
import { useRouter } from "next/dist/client/router";
const Index = (data) => {
  const router = useRouter();
  console.log(router.query.bank);
  const { bank, state, district } = router.query;
  return (
    <Flex justify="center">
      <Box w="450px">
        <h2> WELCOME TO IFSC CODE</h2>
        <Select
          placeholder="Select bank"
          onChange={(e) => {
            router.push(`/${bank}/${state}/${district}/${e.target.value}`);
            //  window.location.assign(`/district/${selectx}`)
          }}
        >
          {data.branchData.map((value, index) => (
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
  const { bank, state, district } = context.params;
  const branchData = await branch.distinct("branch", {
    bank: bank,
    state: state,
    district: district,
  });
  console.log(branchData);
  console.log(context.params.district);
  // console.log("getServerProps", res, context.params, context.query);
  return {
    props: { branchData },
  };
}
export default Index;
