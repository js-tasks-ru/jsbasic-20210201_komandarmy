/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */

// 1-modul_4-task_check_spam

function checkSpam(str) {
  let strLowerCase = str.toLowerCase();
 return !(strLowerCase.includes("1xbet") || strLowerCase.includes("xxx"))
  
}

checkSpam('1XbeT now');
checkSpam('free xxxxx');
checkSpam('innocent rabbit');

