﻿var loclevpack=false;
//loclevpack=true;
var levpack;
var loclevpackstr='{"levpackname":"LevPackDemoLoc","levpackID":"LevPackDemo","levpackpass":"LibrainX","levpacktot":3,"levpackloaded":true,"problems":[{"pname":"U2FsdGVkX19g8VEcY8dTdHinp/JgpPsHB/rwFGG6Bek=","pdesc":"U2FsdGVkX1+TDuhVAJml1mkdZgUomp7hRc2S5L72rL0=","ptype":"enchtma","pencdata":"U2FsdGVkX1/hfDIX6Ey0P2iFSb60gXgQApXg226rAfc=","pencdatb":"U2FsdGVkX19iI6ZnVkbV7MHCNpjlFsJ1NhdiTFnahq4=","pencdatc":"U2FsdGVkX1/kCz/EhdugEMbKd2NAdD9UdR7+6O3x+50=","pencdatd":"U2FsdGVkX18o57bX37lIet3PKvh8qz2Rq3tcj5EMFHE=","penchash":"U2FsdGVkX19lrzj5FN4fN4DCJpndL0ud6RD/oDpCwTeugOZ4PSxYuc/gjRpLiBVR9hdZ3AbgcNmkXhdfB5wK6coljPHy7hNvREMncbMn/TtFNjbsfI9OlNg96JEqYjdz","phint":"U2FsdGVkX18fh5+gY1TWLA1WIMHcvvQwqTj5uHWrBvI="},{"pname":"U2FsdGVkX1/SLUoBQDEEOdQ4mKjqQsI4EwpPRiiBIrs=","pdesc":"U2FsdGVkX1+i931UnPaWJMW/WITXvR1W9FMBSPdP/Cw=","ptype":"enchtma","pencdata":"U2FsdGVkX19rMYyWpBSC929xQ3oTuX1gscvIl+Pe8zU=","pencdatb":"U2FsdGVkX19Dn5q3Xp/u8DO4oDa7afhhBY3CShLfTgo=","pencdatc":"U2FsdGVkX19bCk+CfpMWzIdjW+1IpvV4OUPtjAuqE4s=","pencdatd":"U2FsdGVkX18FVYaF9zZ1uNduZrrfmHO8nSkSHbQPNxA=","penchash":"U2FsdGVkX1974Iwl8R0VyXxxaW2AHhyjRLhIKj1AhQn5YhTfc6XovlGSlA0bFs0QfFITHg/0vk24ISTPWvDeCU86E7Z7KCqxRawczdfHj3QlrH1r2Ckd3BuGp6si4IIx","phint":"U2FsdGVkX19m1OOrH1Yl1eWHZVyD6+oS+D4eQboJF+4="},{"pname":"U2FsdGVkX1+UAOplJMrH65KR9Maq81AJXAjS8TrZC3U=","pdesc":"U2FsdGVkX19bho+Cug5AyT25R4hW+C/EWqBH4hQdD9k=","ptype":"enchtma","pencdata":"U2FsdGVkX18+0I8c+AWR3viqBJjBygMJUPjxi4WkEVc=","pencdatb":"U2FsdGVkX18fpsTIBa6IUfHKmEUTICjwDyZifuYrPEI=","pencdatc":"U2FsdGVkX1/RKnvrQIU0Yrc+RZec2LWW1mQh5A2Bcug=","pencdatd":"U2FsdGVkX1+vHUYzi+hgrJqDK+PJ7DQ27JDcaQzfn5E=","penchash":"U2FsdGVkX1/55TJA1X9urskVcJ9k/q2P6lEgooO1wyF7UZoJ8CdP0/qUr650sOrq4sV/p/if49JhzqMYlqc9nmNVOds0qo0NkBKtAc7G4fY4B6qHPBqqyIWz84mdw7xv","phint":"U2FsdGVkX19aN5d/Y7f3o+RLitL61qVXwlennBNn/5w="},{"pname":"U2FsdGVkX1+70EXQcamo9FIgXOrYNqm9p4Z73sAljkk=","pdesc":"U2FsdGVkX1/Yu89bSbN/u+ySub2L2c/WNSV5O48J+Ec=","ptype":"enchtma","pencdata":"U2FsdGVkX1902LHBpc30HgbjSXzcA+5oEPQ2S0IZys4=","pencdatb":"U2FsdGVkX19mRwit0WCoqm8hF7a6PKBLwjOQYBB4bG0=","pencdatc":"U2FsdGVkX1/m1drTHBqzyic6+dVZwnciVYa/4mqx+SU=","pencdatd":"U2FsdGVkX1/4hpEWZxTjVz5xQYXCF+YOJdiEvHL8lvU=","penchash":"U2FsdGVkX18i95xsTpVoimuFuqKEyUZCxJbVTb4sWXIPt0YpAuBnmyNSWaKgA6SPUzEK+isBi2P84pLczV0gxyNBQqMeA5fUEN2EySOFqnv3tQqAB0yx2oXKoNeXkxjv","phint":"U2FsdGVkX19G4EirvZaqSyAueaCpSHwbgCBLey2hFZM="}]}';
try{
	if(loclevpackstr!=""&&loclevpack)levpack=JSON.parse(loclevpackstr);
}catch(e){alert("本地关卡包载入失败");loclevpack=false;}