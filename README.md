
import { useRouter } from 'next/router'
=============================================
import { useState } from 'react';
import bankx from "../utils/bank";

 interface BanksInteface {
  iFSCCode?: string;
  bank?: string;
  branch?: string;
  mICRNo?: string;
  branchCode?: string;
  sWIFTCode?: string;
  address?: string;
  pINCode?: string;
  district?: string;
  state?: string;
  contact?: string;
  emailID?: string;
  customerCare?: string;
}

const Banks = ({ stars }) => {
    const [selectx, setSelect] = useState('')
    const router = useRouter()
    console.log(router.route)
  return (
    <>
    <h2>{selectx}</h2>
      <select value={selectx} onChange={(e)=>{
          setSelect(e.target.value)
          router.push(`/district/${e.target.value}`)
        
        //  window.location.assign(`/district/${selectx}`)
      }}>
        {stars.map(function (value, index) {
            if (value === 'select') {
              return (
                <option key={index}>{value}</option>
              );
            } else {
              return (
                <option value={value} key={index}>{value}</option>
              );
            }
          }
        )}
      </select>
    </>
  );
};
Banks.getInitialProps = async (ctx) => {

  let district = ['select'];
  bankx.forEach((value, index) => {
    // remove duplicate string from existing array and create new array
    if (!district.includes(value.district)) {
      district.push(value.district);
    }
  });

  return { stars: district };
};

export default Banks;


======================================================================
export async function getServerSideProps(context: any) {
    await dbConnect()
    const datax = await Quote.find({})
    // console.log(JSON.stringify(datax))
    let xx = JSON.stringify(datax);
    let yy = JSON.parse(xx)

    // console.log("getServerProps", res, context.params, context.query);
    return {
        props: { yy }
    };
}

===========================================================================
 <SimpleGrid columns={[1,null,2,4]} spacing="40px">
        {posts.map((user, index) => (
          <Box shadow="md" borderWidth="1px" p={5} key={index}>
         
            <Heading fontSize="xl">{user.title}</Heading>
              <Text mt={4}>{user.body}</Text>
        
          </Box>

        ))}
      </SimpleGrid>


    Z4XC4DgA9v1mVkP6