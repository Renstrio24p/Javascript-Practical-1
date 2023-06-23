export default function LongestDynasty(ReigningDynasty) {
    if (ReigningDynasty.length === 0) {
      return 'No Data is Found';
    }
  
    let LongestDuration = 0;
    let LongestDynasty = null;
  
    for (let i = 0; i < ReigningDynasty.length - 1; i++) {
      const [Dynasty, Reign] = ReigningDynasty[i];
  
      const YearBegin = convertYear(Reign);
      const YearEnds = convertYear(ReigningDynasty[i + 1][1]);
  
      if (YearBegin === 'Invalid' || YearEnds === 'Invalid') {
        continue;
      }
  
      const Duration = YearEnds - YearBegin;
      if (Duration > LongestDuration) {
        LongestDuration = Duration;
        LongestDynasty = Dynasty;
      }
    }
    return LongestDynasty;
  }
  
  function convertYear(RomanYear) {
    const RomanNumerals = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    };
  
    let year = 0;
    let i = 0;
  
    while (i < RomanYear.length) {
      const CurrentSymbol = RomanYear[i];
      const CurrentVal = RomanNumerals[CurrentSymbol];
      const NextSymbol = RomanYear[i + 1];
      const NextVal = RomanNumerals[NextSymbol];
  
      if (CurrentVal === undefined) {
        return 'Invalid';
      }
  
      if (NextVal !== undefined && CurrentVal < NextVal) {
        year += NextVal - CurrentVal;
        i += 2;
      } else {
        year += CurrentVal;
        i += 1;
      }
    }
    return year;
  }
  