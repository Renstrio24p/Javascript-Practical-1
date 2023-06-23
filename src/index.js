import './assets/sass/index.scss';
import styles from './assets/sass/modules/app.module.scss'
import LongestDynasty from './js/LongestDynasty';
import { BottomProduct, TopProduct, zeroProfitProduct } from './js/SalesProblem';

// For Question A
 const productProfitArray = [
   ['Product A', -75],
   ['Product B', -70],
   ['Product C', 95],
   ['Product D', 5],
   ['Product E', -88],
   ['Product D', 29]
];

console.log(TopProduct(productProfitArray))
console.log(BottomProduct(productProfitArray))
console.log(zeroProfitProduct(productProfitArray))

// For Question B

const ReigningDynasty = [
   ['Andre Dynasty', "MMMXICX"],
   ['Bon Dynasty', "MCDXLV"],
   ['San Dynasty', "MXLI"],
   ['Viloria Dynasty', "MCCCIIII"],
   ['Maiko Dynasty', "MDCLXIV"],
   ['Tan Dynasty', "MCCCXCVIII"],
   ['Paul Dynasty', "MCMXLIX"]
];

let aLongestDynasty = LongestDynasty(ReigningDynasty);

console.log(LongestDynasty(ReigningDynasty));

document.querySelector('#root').innerHTML = `
<div class=${styles['pad-50']}>
   <ul>
      <h1>A. Answers: </h1>
      <li>Top Product is :  ${TopProduct(productProfitArray)}<li>
      <li>Bottom Product is : ${BottomProduct(productProfitArray)}<li>
      <li>Zero Profit Product is : ${zeroProfitProduct(productProfitArray)}<li>
   </ul>

   <ul>
      <h1>B. Answer : </h1>
      <li> Longest Reigning Dynasty is : ${aLongestDynasty} </li>
   </ul>
</div>
`