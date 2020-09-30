// import { useRouter } from "next/router";
// import bankx from "../../../utils/bank";
// const SelectedBranch = ({ stars }) => {
//   const router = useRouter();
//   return (
//     <>
//     <div>
//     {JSON.stringify(stars,undefined,4)}
//     </div>
//     </>
//   );
// };

// SelectedBranch.getInitialProps = async (ctx: any) => {
//     const {
//       query: { branch },
//     } = ctx;
//     console.log(branch);

//    let branchInfo =  bankx.filter((value) => value.branch === branch)
    
//     return { stars: branchInfo[0] };
//   };
  
//   export default SelectedBranch;
  

// import { useRouter } from "next/router";
// import bankx from "../../utils/bank";
// const SelectBranch = ({ stars }) => {
//   const router = useRouter();
//   return (
//     <>
//       <select
//         onChange={(e) => {
//           router.push(`/district/branch/${e.target.value}`);
//         }}
//       >
//         {stars.map((value, index) => {
//           if (value === "select") {
//             return <option key={index}>{value}</option>;
//           } else {
//             return (
//               <option value={value} key={index}>
//                 {value}
//               </option>
//             );
//           }
//         })}
//       </select>
//     </>
//   );
// };

// SelectBranch.getInitialProps = async (ctx: any) => {
//   const {
//     query: { index },
//   } = ctx;
//   console.log(index);
//   let uniqueChars = ["select"];
//   bankx.forEach((value) => {
//     if (value.district === index) {
//       if (!uniqueChars.includes(value.district)) {
//         uniqueChars.push(value.branch);
//       }
//     }
//   });
//   console.log(uniqueChars);
//   //   let filterBranch = bankx.filter(({ district }) => {
//   //     // console.log(district);
//   //     return district === index
//   //   });
//   // console.log(filterBranch.length)
//   return { stars: uniqueChars };
// };

// export default SelectBranch;

const Example = () => {
return (
    <>
    </>
)
}

export default Example