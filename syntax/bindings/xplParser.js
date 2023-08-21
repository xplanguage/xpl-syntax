// Generated from xplParser.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import xplParserListener from './xplParserListener.js';
const serializedATN = [4,1,67,497,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,1,0,3,0,122,8,0,1,0,1,0,5,0,126,8,0,10,
0,12,0,129,9,0,1,0,1,0,1,1,1,1,5,1,135,8,1,10,1,12,1,138,9,1,1,2,1,2,1,3,
1,3,1,3,1,3,1,3,3,3,147,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,3,3,165,8,3,1,4,1,4,3,4,169,8,4,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,3,5,178,8,5,1,5,1,5,1,5,3,5,183,8,5,1,5,1,5,1,6,1,6,1,6,3,6,190,
8,6,1,7,4,7,193,8,7,11,7,12,7,194,1,8,3,8,198,8,8,1,8,3,8,201,8,8,1,8,3,
8,204,8,8,1,8,1,8,3,8,208,8,8,1,8,3,8,211,8,8,1,8,3,8,214,8,8,1,8,1,8,1,
8,1,8,1,8,3,8,221,8,8,3,8,223,8,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,
1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,3,16,243,8,16,1,16,1,16,
1,16,1,16,1,17,1,17,1,17,1,17,3,17,253,8,17,1,18,1,18,1,18,3,18,258,8,18,
1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,24,4,24,272,8,24,
11,24,12,24,273,1,25,3,25,277,8,25,1,25,1,25,3,25,281,8,25,1,26,1,26,1,26,
1,27,3,27,287,8,27,1,27,1,27,3,27,291,8,27,1,27,1,27,1,27,1,27,3,27,297,
8,27,1,28,1,28,1,29,1,29,3,29,303,8,29,1,29,5,29,306,8,29,10,29,12,29,309,
9,29,1,29,1,29,1,30,1,30,1,30,1,30,4,30,317,8,30,11,30,12,30,318,3,30,321,
8,30,1,31,1,31,1,31,3,31,326,8,31,1,31,1,31,1,32,1,32,1,32,3,32,333,8,32,
1,32,1,32,1,33,1,33,1,34,1,34,3,34,341,8,34,1,34,1,34,1,35,1,35,1,35,1,35,
1,35,3,35,350,8,35,1,36,1,36,1,36,1,36,3,36,356,8,36,1,36,1,36,5,36,360,
8,36,10,36,12,36,363,9,36,1,36,4,36,366,8,36,11,36,12,36,367,1,37,1,37,1,
37,1,37,3,37,374,8,37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,
1,42,1,42,1,42,5,42,389,8,42,10,42,12,42,392,9,42,1,42,1,42,1,43,4,43,397,
8,43,11,43,12,43,398,1,44,1,44,1,45,1,45,1,46,1,46,3,46,407,8,46,1,46,1,
46,1,47,1,47,1,47,5,47,414,8,47,10,47,12,47,417,9,47,1,47,1,47,1,48,4,48,
422,8,48,11,48,12,48,423,1,49,1,49,3,49,428,8,49,1,49,1,49,1,50,1,50,1,50,
5,50,435,8,50,10,50,12,50,438,9,50,1,50,1,50,1,51,4,51,443,8,51,11,51,12,
51,444,1,52,1,52,3,52,449,8,52,1,52,1,52,1,53,1,53,1,53,5,53,456,8,53,10,
53,12,53,459,9,53,1,53,1,53,1,54,4,54,464,8,54,11,54,12,54,465,1,55,1,55,
3,55,470,8,55,1,55,1,55,1,56,1,56,1,56,5,56,477,8,56,10,56,12,56,480,9,56,
1,56,1,56,1,57,4,57,485,8,57,11,57,12,57,486,1,58,1,58,3,58,491,8,58,1,58,
1,58,1,59,1,59,1,59,0,0,60,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,0,0,515,
0,121,1,0,0,0,2,132,1,0,0,0,4,139,1,0,0,0,6,141,1,0,0,0,8,168,1,0,0,0,10,
182,1,0,0,0,12,189,1,0,0,0,14,192,1,0,0,0,16,197,1,0,0,0,18,224,1,0,0,0,
20,226,1,0,0,0,22,228,1,0,0,0,24,230,1,0,0,0,26,232,1,0,0,0,28,234,1,0,0,
0,30,236,1,0,0,0,32,242,1,0,0,0,34,252,1,0,0,0,36,257,1,0,0,0,38,259,1,0,
0,0,40,261,1,0,0,0,42,263,1,0,0,0,44,265,1,0,0,0,46,268,1,0,0,0,48,271,1,
0,0,0,50,276,1,0,0,0,52,282,1,0,0,0,54,296,1,0,0,0,56,298,1,0,0,0,58,300,
1,0,0,0,60,320,1,0,0,0,62,325,1,0,0,0,64,332,1,0,0,0,66,336,1,0,0,0,68,338,
1,0,0,0,70,344,1,0,0,0,72,355,1,0,0,0,74,373,1,0,0,0,76,375,1,0,0,0,78,377,
1,0,0,0,80,379,1,0,0,0,82,381,1,0,0,0,84,383,1,0,0,0,86,396,1,0,0,0,88,400,
1,0,0,0,90,402,1,0,0,0,92,404,1,0,0,0,94,410,1,0,0,0,96,421,1,0,0,0,98,425,
1,0,0,0,100,431,1,0,0,0,102,442,1,0,0,0,104,446,1,0,0,0,106,452,1,0,0,0,
108,463,1,0,0,0,110,467,1,0,0,0,112,473,1,0,0,0,114,484,1,0,0,0,116,488,
1,0,0,0,118,494,1,0,0,0,120,122,3,2,1,0,121,120,1,0,0,0,121,122,1,0,0,0,
122,127,1,0,0,0,123,126,3,6,3,0,124,126,3,54,27,0,125,123,1,0,0,0,125,124,
1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,130,1,0,0,0,
129,127,1,0,0,0,130,131,5,0,0,1,131,1,1,0,0,0,132,136,3,4,2,0,133,135,3,
4,2,0,134,133,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,
3,1,0,0,0,138,136,1,0,0,0,139,140,5,1,0,0,140,5,1,0,0,0,141,146,3,10,5,0,
142,143,5,2,0,0,143,144,3,8,4,0,144,145,5,3,0,0,145,147,1,0,0,0,146,142,
1,0,0,0,146,147,1,0,0,0,147,164,1,0,0,0,148,149,5,4,0,0,149,150,3,14,7,0,
150,151,5,5,0,0,151,152,1,0,0,0,152,153,5,29,0,0,153,154,3,48,24,0,154,155,
5,30,0,0,155,165,1,0,0,0,156,157,5,4,0,0,157,158,3,14,7,0,158,159,5,5,0,
0,159,165,1,0,0,0,160,161,5,29,0,0,161,162,3,48,24,0,162,163,5,30,0,0,163,
165,1,0,0,0,164,148,1,0,0,0,164,156,1,0,0,0,164,160,1,0,0,0,165,7,1,0,0,
0,166,169,3,64,32,0,167,169,3,36,18,0,168,166,1,0,0,0,168,167,1,0,0,0,169,
9,1,0,0,0,170,178,3,118,59,0,171,178,3,64,32,0,172,178,3,74,37,0,173,178,
3,112,56,0,174,178,3,58,29,0,175,178,3,12,6,0,176,178,3,30,15,0,177,170,
1,0,0,0,177,171,1,0,0,0,177,172,1,0,0,0,177,173,1,0,0,0,177,174,1,0,0,0,
177,175,1,0,0,0,177,176,1,0,0,0,178,179,1,0,0,0,179,180,5,12,0,0,180,183,
1,0,0,0,181,183,3,84,42,0,182,177,1,0,0,0,182,181,1,0,0,0,183,184,1,0,0,
0,184,185,5,12,0,0,185,11,1,0,0,0,186,190,3,94,47,0,187,190,3,100,50,0,188,
190,3,106,53,0,189,186,1,0,0,0,189,187,1,0,0,0,189,188,1,0,0,0,190,13,1,
0,0,0,191,193,3,16,8,0,192,191,1,0,0,0,193,194,1,0,0,0,194,192,1,0,0,0,194,
195,1,0,0,0,195,15,1,0,0,0,196,198,3,34,17,0,197,196,1,0,0,0,197,198,1,0,
0,0,198,200,1,0,0,0,199,201,3,18,9,0,200,199,1,0,0,0,200,201,1,0,0,0,201,
203,1,0,0,0,202,204,3,20,10,0,203,202,1,0,0,0,203,204,1,0,0,0,204,205,1,
0,0,0,205,207,3,28,14,0,206,208,3,22,11,0,207,206,1,0,0,0,207,208,1,0,0,
0,208,210,1,0,0,0,209,211,3,24,12,0,210,209,1,0,0,0,210,211,1,0,0,0,211,
213,1,0,0,0,212,214,3,26,13,0,213,212,1,0,0,0,213,214,1,0,0,0,214,222,1,
0,0,0,215,220,5,12,0,0,216,221,3,54,27,0,217,221,3,32,16,0,218,221,3,72,
36,0,219,221,3,30,15,0,220,216,1,0,0,0,220,217,1,0,0,0,220,218,1,0,0,0,220,
219,1,0,0,0,221,223,1,0,0,0,222,215,1,0,0,0,222,223,1,0,0,0,223,17,1,0,0,
0,224,225,5,11,0,0,225,19,1,0,0,0,226,227,5,11,0,0,227,21,1,0,0,0,228,229,
5,11,0,0,229,23,1,0,0,0,230,231,5,11,0,0,231,25,1,0,0,0,232,233,5,10,0,0,
233,27,1,0,0,0,234,235,5,24,0,0,235,29,1,0,0,0,236,237,5,9,0,0,237,31,1,
0,0,0,238,239,5,4,0,0,239,240,3,14,7,0,240,241,5,5,0,0,241,243,1,0,0,0,242,
238,1,0,0,0,242,243,1,0,0,0,243,244,1,0,0,0,244,245,5,29,0,0,245,246,3,50,
25,0,246,247,5,30,0,0,247,33,1,0,0,0,248,253,3,38,19,0,249,253,3,40,20,0,
250,253,3,42,21,0,251,253,3,44,22,0,252,248,1,0,0,0,252,249,1,0,0,0,252,
250,1,0,0,0,252,251,1,0,0,0,253,35,1,0,0,0,254,258,3,38,19,0,255,258,3,40,
20,0,256,258,3,42,21,0,257,254,1,0,0,0,257,255,1,0,0,0,257,256,1,0,0,0,258,
37,1,0,0,0,259,260,5,16,0,0,260,39,1,0,0,0,261,262,5,17,0,0,262,41,1,0,0,
0,263,264,5,18,0,0,264,43,1,0,0,0,265,266,5,19,0,0,266,267,3,46,23,0,267,
45,1,0,0,0,268,269,5,24,0,0,269,47,1,0,0,0,270,272,3,50,25,0,271,270,1,0,
0,0,272,273,1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,49,1,0,0,0,275,277,
3,52,26,0,276,275,1,0,0,0,276,277,1,0,0,0,277,278,1,0,0,0,278,280,3,54,27,
0,279,281,3,68,34,0,280,279,1,0,0,0,280,281,1,0,0,0,281,51,1,0,0,0,282,283,
5,24,0,0,283,284,5,12,0,0,284,53,1,0,0,0,285,287,3,56,28,0,286,285,1,0,0,
0,286,287,1,0,0,0,287,288,1,0,0,0,288,297,3,58,29,0,289,291,3,56,28,0,290,
289,1,0,0,0,290,291,1,0,0,0,291,292,1,0,0,0,292,297,3,64,32,0,293,297,3,
74,37,0,294,297,3,112,56,0,295,297,3,72,36,0,296,286,1,0,0,0,296,290,1,0,
0,0,296,293,1,0,0,0,296,294,1,0,0,0,296,295,1,0,0,0,297,55,1,0,0,0,298,299,
5,15,0,0,299,57,1,0,0,0,300,302,3,60,30,0,301,303,3,70,35,0,302,301,1,0,
0,0,302,303,1,0,0,0,303,307,1,0,0,0,304,306,3,62,31,0,305,304,1,0,0,0,306,
309,1,0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,308,310,1,0,0,0,309,307,1,0,
0,0,310,311,5,5,0,0,311,59,1,0,0,0,312,313,3,64,32,0,313,314,5,4,0,0,314,
321,1,0,0,0,315,317,5,8,0,0,316,315,1,0,0,0,317,318,1,0,0,0,318,316,1,0,
0,0,318,319,1,0,0,0,319,321,1,0,0,0,320,312,1,0,0,0,320,316,1,0,0,0,321,
61,1,0,0,0,322,323,3,118,59,0,323,324,5,12,0,0,324,326,1,0,0,0,325,322,1,
0,0,0,325,326,1,0,0,0,326,327,1,0,0,0,327,328,3,54,27,0,328,63,1,0,0,0,329,
330,3,66,33,0,330,331,5,14,0,0,331,333,1,0,0,0,332,329,1,0,0,0,332,333,1,
0,0,0,333,334,1,0,0,0,334,335,3,118,59,0,335,65,1,0,0,0,336,337,5,24,0,0,
337,67,1,0,0,0,338,340,5,13,0,0,339,341,3,52,26,0,340,339,1,0,0,0,340,341,
1,0,0,0,341,342,1,0,0,0,342,343,3,50,25,0,343,69,1,0,0,0,344,349,3,10,5,
0,345,346,5,29,0,0,346,347,3,54,27,0,347,348,5,30,0,0,348,350,1,0,0,0,349,
345,1,0,0,0,349,350,1,0,0,0,350,71,1,0,0,0,351,352,5,4,0,0,352,353,3,14,
7,0,353,354,5,5,0,0,354,356,1,0,0,0,355,351,1,0,0,0,355,356,1,0,0,0,356,
365,1,0,0,0,357,361,5,6,0,0,358,360,3,54,27,0,359,358,1,0,0,0,360,363,1,
0,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,364,1,0,0,0,363,361,1,0,0,0,364,
366,5,7,0,0,365,357,1,0,0,0,366,367,1,0,0,0,367,365,1,0,0,0,367,368,1,0,
0,0,368,73,1,0,0,0,369,374,3,76,38,0,370,374,3,78,39,0,371,374,3,80,40,0,
372,374,3,82,41,0,373,369,1,0,0,0,373,370,1,0,0,0,373,371,1,0,0,0,373,372,
1,0,0,0,374,75,1,0,0,0,375,376,5,22,0,0,376,77,1,0,0,0,377,378,5,23,0,0,
378,79,1,0,0,0,379,380,5,20,0,0,380,81,1,0,0,0,381,382,5,21,0,0,382,83,1,
0,0,0,383,390,5,31,0,0,384,389,3,86,43,0,385,389,3,88,44,0,386,389,3,90,
45,0,387,389,3,92,46,0,388,384,1,0,0,0,388,385,1,0,0,0,388,386,1,0,0,0,388,
387,1,0,0,0,389,392,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,393,1,0,
0,0,392,390,1,0,0,0,393,394,5,43,0,0,394,85,1,0,0,0,395,397,5,36,0,0,396,
395,1,0,0,0,397,398,1,0,0,0,398,396,1,0,0,0,398,399,1,0,0,0,399,87,1,0,0,
0,400,401,5,38,0,0,401,89,1,0,0,0,402,403,5,37,0,0,403,91,1,0,0,0,404,406,
5,41,0,0,405,407,3,54,27,0,406,405,1,0,0,0,406,407,1,0,0,0,407,408,1,0,0,
0,408,409,5,30,0,0,409,93,1,0,0,0,410,415,5,32,0,0,411,414,3,96,48,0,412,
414,3,98,49,0,413,411,1,0,0,0,413,412,1,0,0,0,414,417,1,0,0,0,415,413,1,
0,0,0,415,416,1,0,0,0,416,418,1,0,0,0,417,415,1,0,0,0,418,419,5,49,0,0,419,
95,1,0,0,0,420,422,5,44,0,0,421,420,1,0,0,0,422,423,1,0,0,0,423,421,1,0,
0,0,423,424,1,0,0,0,424,97,1,0,0,0,425,427,5,47,0,0,426,428,3,54,27,0,427,
426,1,0,0,0,427,428,1,0,0,0,428,429,1,0,0,0,429,430,5,30,0,0,430,99,1,0,
0,0,431,436,5,33,0,0,432,435,3,102,51,0,433,435,3,104,52,0,434,432,1,0,0,
0,434,433,1,0,0,0,435,438,1,0,0,0,436,434,1,0,0,0,436,437,1,0,0,0,437,439,
1,0,0,0,438,436,1,0,0,0,439,440,5,55,0,0,440,101,1,0,0,0,441,443,5,50,0,
0,442,441,1,0,0,0,443,444,1,0,0,0,444,442,1,0,0,0,444,445,1,0,0,0,445,103,
1,0,0,0,446,448,5,53,0,0,447,449,3,54,27,0,448,447,1,0,0,0,448,449,1,0,0,
0,449,450,1,0,0,0,450,451,5,30,0,0,451,105,1,0,0,0,452,457,5,34,0,0,453,
456,3,108,54,0,454,456,3,110,55,0,455,453,1,0,0,0,455,454,1,0,0,0,456,459,
1,0,0,0,457,455,1,0,0,0,457,458,1,0,0,0,458,460,1,0,0,0,459,457,1,0,0,0,
460,461,5,61,0,0,461,107,1,0,0,0,462,464,5,56,0,0,463,462,1,0,0,0,464,465,
1,0,0,0,465,463,1,0,0,0,465,466,1,0,0,0,466,109,1,0,0,0,467,469,5,59,0,0,
468,470,3,54,27,0,469,468,1,0,0,0,469,470,1,0,0,0,470,471,1,0,0,0,471,472,
5,30,0,0,472,111,1,0,0,0,473,478,5,35,0,0,474,477,3,114,57,0,475,477,3,116,
58,0,476,474,1,0,0,0,476,475,1,0,0,0,477,480,1,0,0,0,478,476,1,0,0,0,478,
479,1,0,0,0,479,481,1,0,0,0,480,478,1,0,0,0,481,482,5,67,0,0,482,113,1,0,
0,0,483,485,5,62,0,0,484,483,1,0,0,0,485,486,1,0,0,0,486,484,1,0,0,0,486,
487,1,0,0,0,487,115,1,0,0,0,488,490,5,65,0,0,489,491,3,54,27,0,490,489,1,
0,0,0,490,491,1,0,0,0,491,492,1,0,0,0,492,493,5,30,0,0,493,117,1,0,0,0,494,
495,5,24,0,0,495,119,1,0,0,0,60,121,125,127,136,146,164,168,177,182,189,
194,197,200,203,207,210,213,220,222,242,252,257,273,276,280,286,290,296,
302,307,318,320,325,332,340,349,355,361,367,373,388,390,398,406,413,415,
423,427,434,436,444,448,455,457,465,469,476,478,486,490];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class xplParser extends antlr4.Parser {

    static grammarFileName = "xplParser.g4";
    static literalNames = [ null, null, "'<'", "'>'", "'('", "')'", "'['", 
                            "']'", null, "'@@'", "'*'", "'!'", null, "'|'", 
                            "'.'", "'\\'", "'#'", "'&'", "'$'", "'@'", null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'}'", null, null, null, null, null, null, 
                            "'//'", null, "'\\:'", null, null, null, null, 
                            null, "'\\''", null, null, null, null, null, 
                            "'\\\"'", null, null, null, null, null, "'\\^'", 
                            null, null, null, null, null, "'\\`'" ];
    static symbolicNames = [ null, "HashBang", "BraceOpen", "BraceClose", 
                             "ParenOpen", "ParenClose", "TableOpen", "TableClose", 
                             "FormulaChar", "Null", "Star", "Bang", "Assign", 
                             "Pipe", "Dot", "ParentCall", "TypeTable", "TypeBool", 
                             "TypeString", "TypeCustom", "HexInteger", "OctalInteger", 
                             "DecimalInteger", "Decimal", "Label", "Ws", 
                             "Comment", "CommentLine", "Annotation", "CurlyOpen", 
                             "CurlyClose", "P_Open", "PE_Open", "PH_Open", 
                             "PO_Open", "StringOpen", "P_Part", "P_Dig", 
                             "P_Dir", "P_Esc", "P_FieldEsc", "P_FieldOpen", 
                             "P_Literal", "P_Close", "PE_Part", "PE_Esc", 
                             "PE_FieldEsc", "PE_FieldOpen", "PE_Literal", 
                             "PE_Close", "PH_Part", "PH_Esc", "PH_FieldEsc", 
                             "PH_FieldOpen", "PH_Literal", "PH_Close", "PO_Part", 
                             "PO_Esc", "PO_FieldEsc", "PO_FieldOpen", "PO_Literal", 
                             "PO_Close", "S_StringPart", "S_StringEsc", 
                             "S_StringFieldEsc", "S_StringFieldOpen", "S_StringLiteral", 
                             "S_StringClose" ];
    static ruleNames = [ "parse", "hashBangs", "hashBang", "patchDef", "patchParent", 
                         "match", "pattern", "batch", "batchItem", "protect", 
                         "priv", "mutable", "nullable", "unique", "batchLabel", 
                         "null", "formulaDef", "type", "typeNative", "typeTable", 
                         "typeBool", "typeString", "typeCustom", "typeLabel", 
                         "hatch", "formulaicPiped", "alias", "formulaic", 
                         "parentCall", "formulaCall", "formulaLabel", "formulaCallItem", 
                         "field", "module", "piped", "exceptional", "table", 
                         "number", "decimalInteger", "decimal", "hexInteger", 
                         "octalInteger", "path", "pathPart", "pathDirect", 
                         "pathDig", "pathField", "patternEasy", "patternEasyPart", 
                         "patternEasyField", "patternHard", "patternHardPart", 
                         "patternHardField", "patternOpen", "patternOpenPart", 
                         "patternOpenField", "string", "stringPart", "stringField", 
                         "label" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = xplParser.ruleNames;
        this.literalNames = xplParser.literalNames;
        this.symbolicNames = xplParser.symbolicNames;
    }



	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, xplParser.RULE_parse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 120;
	            this.hashBangs();
	        }

	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 4)) & ~0x1f) === 0 && ((1 << (_la - 4)) & 4162783285) !== 0)) {
	            this.state = 125;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 123;
	                this.patchDef();
	                break;

	            case 2:
	                this.state = 124;
	                this.formulaic();
	                break;

	            }
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 130;
	        this.match(xplParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hashBangs() {
	    let localctx = new HashBangsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, xplParser.RULE_hashBangs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.hashBang();
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 133;
	            this.hashBang();
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hashBang() {
	    let localctx = new HashBangContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, xplParser.RULE_hashBang);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(xplParser.HashBang);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patchDef() {
	    let localctx = new PatchDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, xplParser.RULE_patchDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match();
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 142;
	            this.match(xplParser.BraceOpen);
	            this.state = 143;
	            this.patchParent();
	            this.state = 144;
	            this.match(xplParser.BraceClose);
	        }

	        this.state = 164;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 148;
	            this.match(xplParser.ParenOpen);
	            this.state = 149;
	            this.batch();
	            this.state = 150;
	            this.match(xplParser.ParenClose);

	            this.state = 152;
	            this.match(xplParser.CurlyOpen);
	            this.state = 153;
	            this.hatch();
	            this.state = 154;
	            this.match(xplParser.CurlyClose);
	            break;

	        case 2:
	            this.state = 156;
	            this.match(xplParser.ParenOpen);
	            this.state = 157;
	            this.batch();
	            this.state = 158;
	            this.match(xplParser.ParenClose);
	            break;

	        case 3:
	            this.state = 160;
	            this.match(xplParser.CurlyOpen);
	            this.state = 161;
	            this.hatch();
	            this.state = 162;
	            this.match(xplParser.CurlyClose);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patchParent() {
	    let localctx = new PatchParentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, xplParser.RULE_patchParent);
	    try {
	        this.state = 168;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 166;
	            this.field();
	            break;
	        case 16:
	        case 17:
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 167;
	            this.typeNative();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	match() {
	    let localctx = new MatchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, xplParser.RULE_match);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	            this.state = 177;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 170;
	                this.label();
	                break;

	            case 2:
	                this.state = 171;
	                this.field();
	                break;

	            case 3:
	                this.state = 172;
	                this.number();
	                break;

	            case 4:
	                this.state = 173;
	                this.string();
	                break;

	            case 5:
	                this.state = 174;
	                this.formulaCall();
	                break;

	            case 6:
	                this.state = 175;
	                this.pattern();
	                break;

	            case 7:
	                this.state = 176;
	                this.null_();
	                break;

	            }
	            this.state = 179;
	            this.match(xplParser.Assign);
	            break;
	        case 31:
	            this.state = 181;
	            this.path();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 184;
	        this.match(xplParser.Assign);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pattern() {
	    let localctx = new PatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, xplParser.RULE_pattern);
	    try {
	        this.state = 189;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 186;
	            this.patternEasy();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            this.patternHard();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 188;
	            this.patternOpen();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	batch() {
	    let localctx = new BatchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, xplParser.RULE_batch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 191;
	            this.batchItem();
	            this.state = 194; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 17762304) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	batchItem() {
	    let localctx = new BatchItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, xplParser.RULE_batchItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 983040) !== 0)) {
	            this.state = 196;
	            this.type();
	        }

	        this.state = 200;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 199;
	            this.protect();

	        }
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 202;
	            this.priv();
	        }

	        this.state = 205;
	        this.batchLabel();
	        this.state = 207;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 206;
	            this.mutable();

	        }
	        this.state = 210;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 209;
	            this.nullable();

	        }
	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 212;
	            this.unique();
	        }

	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 215;
	            this.match(xplParser.Assign);
	            this.state = 220;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 216;
	                this.formulaic();
	                break;

	            case 2:
	                this.state = 217;
	                this.formulaDef();
	                break;

	            case 3:
	                this.state = 218;
	                this.table();
	                break;

	            case 4:
	                this.state = 219;
	                this.null_();
	                break;

	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	protect() {
	    let localctx = new ProtectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, xplParser.RULE_protect);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.match(xplParser.Bang);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	priv() {
	    let localctx = new PrivContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, xplParser.RULE_priv);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(xplParser.Bang);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mutable() {
	    let localctx = new MutableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, xplParser.RULE_mutable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(xplParser.Bang);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nullable() {
	    let localctx = new NullableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, xplParser.RULE_nullable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(xplParser.Bang);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unique() {
	    let localctx = new UniqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, xplParser.RULE_unique);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(xplParser.Star);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	batchLabel() {
	    let localctx = new BatchLabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, xplParser.RULE_batchLabel);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(xplParser.Label);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	null_() {
	    let localctx = new NullContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, xplParser.RULE_null);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(xplParser.Null);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulaDef() {
	    let localctx = new FormulaDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, xplParser.RULE_formulaDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 238;
	            this.match(xplParser.ParenOpen);
	            this.state = 239;
	            this.batch();
	            this.state = 240;
	            this.match(xplParser.ParenClose);
	        }

	        this.state = 244;
	        this.match(xplParser.CurlyOpen);
	        this.state = 245;
	        this.formulaicPiped();
	        this.state = 246;
	        this.match(xplParser.CurlyClose);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, xplParser.RULE_type);
	    try {
	        this.state = 252;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 248;
	            this.typeTable();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 249;
	            this.typeBool();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 250;
	            this.typeString();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 251;
	            this.typeCustom();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeNative() {
	    let localctx = new TypeNativeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, xplParser.RULE_typeNative);
	    try {
	        this.state = 257;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 254;
	            this.typeTable();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 255;
	            this.typeBool();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 256;
	            this.typeString();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeTable() {
	    let localctx = new TypeTableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, xplParser.RULE_typeTable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.match(xplParser.TypeTable);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeBool() {
	    let localctx = new TypeBoolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, xplParser.RULE_typeBool);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(xplParser.TypeBool);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeString() {
	    let localctx = new TypeStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, xplParser.RULE_typeString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(xplParser.TypeString);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeCustom() {
	    let localctx = new TypeCustomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, xplParser.RULE_typeCustom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(xplParser.TypeCustom);
	        this.state = 266;
	        this.typeLabel();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeLabel() {
	    let localctx = new TypeLabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, xplParser.RULE_typeLabel);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(xplParser.Label);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hatch() {
	    let localctx = new HatchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, xplParser.RULE_hatch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 270;
	            this.formulaicPiped();
	            this.state = 273; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 4)) & ~0x1f) === 0 && ((1 << (_la - 4)) & 2149517333) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulaicPiped() {
	    let localctx = new FormulaicPipedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, xplParser.RULE_formulaicPiped);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        if(la_===1) {
	            this.state = 275;
	            this.alias();

	        }
	        this.state = 278;
	        this.formulaic();
	        this.state = 280;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 279;
	            this.piped();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alias() {
	    let localctx = new AliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, xplParser.RULE_alias);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        this.match(xplParser.Label);
	        this.state = 283;
	        this.match(xplParser.Assign);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulaic() {
	    let localctx = new FormulaicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, xplParser.RULE_formulaic);
	    var _la = 0;
	    try {
	        this.state = 296;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 285;
	                this.parentCall();
	            }

	            this.state = 288;
	            this.formulaCall();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 290;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 289;
	                this.parentCall();
	            }

	            this.state = 292;
	            this.field();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 293;
	            this.number();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 294;
	            this.string();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 295;
	            this.table();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parentCall() {
	    let localctx = new ParentCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, xplParser.RULE_parentCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.match(xplParser.ParentCall);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulaCall() {
	    let localctx = new FormulaCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, xplParser.RULE_formulaCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.formulaLabel();
	        this.state = 302;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        if(la_===1) {
	            this.state = 301;
	            this.exceptional();

	        }
	        this.state = 307;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 4)) & ~0x1f) === 0 && ((1 << (_la - 4)) & 2149517333) !== 0)) {
	            this.state = 304;
	            this.formulaCallItem();
	            this.state = 309;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 310;
	        this.match(xplParser.ParenClose);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulaLabel() {
	    let localctx = new FormulaLabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, xplParser.RULE_formulaLabel);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.state = 312;
	            this.field();
	            this.state = 313;
	            this.match(xplParser.ParenOpen);
	            break;
	        case 8:
	            this.state = 316; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 315;
	            		this.match(xplParser.FormulaChar);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 318; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,30, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulaCallItem() {
	    let localctx = new FormulaCallItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, xplParser.RULE_formulaCallItem);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        if(la_===1) {
	            this.state = 322;
	            this.label();
	            this.state = 323;
	            this.match(xplParser.Assign);

	        }
	        this.state = 327;
	        this.formulaic();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, xplParser.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        if(la_===1) {
	            this.state = 329;
	            this.module();
	            this.state = 330;
	            this.match(xplParser.Dot);

	        }
	        this.state = 334;
	        this.label();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	module() {
	    let localctx = new ModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, xplParser.RULE_module);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.match(xplParser.Label);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	piped() {
	    let localctx = new PipedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, xplParser.RULE_piped);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        this.match(xplParser.Pipe);
	        this.state = 340;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        if(la_===1) {
	            this.state = 339;
	            this.alias();

	        }
	        this.state = 342;
	        this.formulaicPiped();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exceptional() {
	    let localctx = new ExceptionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, xplParser.RULE_exceptional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match();
	        this.state = 349;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 345;
	            this.match(xplParser.CurlyOpen);
	            this.state = 346;
	            this.formulaic();
	            this.state = 347;
	            this.match(xplParser.CurlyClose);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table() {
	    let localctx = new TableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, xplParser.RULE_table);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 351;
	            this.match(xplParser.ParenOpen);
	            this.state = 352;
	            this.batch();
	            this.state = 353;
	            this.match(xplParser.ParenClose);
	        }

	        this.state = 365; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 357;
	        		this.match(xplParser.TableOpen);
	        		this.state = 361;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		while(((((_la - 4)) & ~0x1f) === 0 && ((1 << (_la - 4)) & 2149517333) !== 0)) {
	        		    this.state = 358;
	        		    this.formulaic();
	        		    this.state = 363;
	        		    this._errHandler.sync(this);
	        		    _la = this._input.LA(1);
	        		}
	        		this.state = 364;
	        		this.match(xplParser.TableClose);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 367; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,38, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, xplParser.RULE_number);
	    try {
	        this.state = 373;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 369;
	            this.decimalInteger();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 370;
	            this.decimal();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 371;
	            this.hexInteger();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 372;
	            this.octalInteger();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decimalInteger() {
	    let localctx = new DecimalIntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, xplParser.RULE_decimalInteger);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.match(xplParser.DecimalInteger);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decimal() {
	    let localctx = new DecimalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, xplParser.RULE_decimal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(xplParser.Decimal);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hexInteger() {
	    let localctx = new HexIntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, xplParser.RULE_hexInteger);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(xplParser.HexInteger);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	octalInteger() {
	    let localctx = new OctalIntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, xplParser.RULE_octalInteger);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 381;
	        this.match(xplParser.OctalInteger);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	path() {
	    let localctx = new PathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, xplParser.RULE_path);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 383;
	        this.match(xplParser.P_Open);
	        this.state = 390;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 39) !== 0)) {
	            this.state = 388;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 36:
	                this.state = 384;
	                this.pathPart();
	                break;
	            case 38:
	                this.state = 385;
	                this.pathDirect();
	                break;
	            case 37:
	                this.state = 386;
	                this.pathDig();
	                break;
	            case 41:
	                this.state = 387;
	                this.pathField();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 392;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 393;
	        this.match(xplParser.P_Close);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pathPart() {
	    let localctx = new PathPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, xplParser.RULE_pathPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 395;
	        		this.match(xplParser.P_Part);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 398; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,42, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pathDirect() {
	    let localctx = new PathDirectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, xplParser.RULE_pathDirect);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        this.match(xplParser.P_Dir);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pathDig() {
	    let localctx = new PathDigContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, xplParser.RULE_pathDig);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 402;
	        this.match(xplParser.P_Dig);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pathField() {
	    let localctx = new PathFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, xplParser.RULE_pathField);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.match(xplParser.P_FieldOpen);
	        this.state = 406;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 4)) & ~0x1f) === 0 && ((1 << (_la - 4)) & 2149517333) !== 0)) {
	            this.state = 405;
	            this.formulaic();
	        }

	        this.state = 408;
	        this.match(xplParser.CurlyClose);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternEasy() {
	    let localctx = new PatternEasyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, xplParser.RULE_patternEasy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.match(xplParser.PE_Open);
	        this.state = 415;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===44 || _la===47) {
	            this.state = 413;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 44:
	                this.state = 411;
	                this.patternEasyPart();
	                break;
	            case 47:
	                this.state = 412;
	                this.patternEasyField();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 417;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 418;
	        this.match(xplParser.PE_Close);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternEasyPart() {
	    let localctx = new PatternEasyPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, xplParser.RULE_patternEasyPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 420;
	        		this.match(xplParser.PE_Part);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 423; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,46, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternEasyField() {
	    let localctx = new PatternEasyFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, xplParser.RULE_patternEasyField);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        this.match(xplParser.PE_FieldOpen);
	        this.state = 427;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 4)) & ~0x1f) === 0 && ((1 << (_la - 4)) & 2149517333) !== 0)) {
	            this.state = 426;
	            this.formulaic();
	        }

	        this.state = 429;
	        this.match(xplParser.CurlyClose);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternHard() {
	    let localctx = new PatternHardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, xplParser.RULE_patternHard);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        this.match(xplParser.PH_Open);
	        this.state = 436;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===50 || _la===53) {
	            this.state = 434;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 50:
	                this.state = 432;
	                this.patternHardPart();
	                break;
	            case 53:
	                this.state = 433;
	                this.patternHardField();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 438;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 439;
	        this.match(xplParser.PH_Close);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternHardPart() {
	    let localctx = new PatternHardPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, xplParser.RULE_patternHardPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 441;
	        		this.match(xplParser.PH_Part);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 444; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,50, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternHardField() {
	    let localctx = new PatternHardFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, xplParser.RULE_patternHardField);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 446;
	        this.match(xplParser.PH_FieldOpen);
	        this.state = 448;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 4)) & ~0x1f) === 0 && ((1 << (_la - 4)) & 2149517333) !== 0)) {
	            this.state = 447;
	            this.formulaic();
	        }

	        this.state = 450;
	        this.match(xplParser.CurlyClose);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternOpen() {
	    let localctx = new PatternOpenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, xplParser.RULE_patternOpen);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 452;
	        this.match(xplParser.PO_Open);
	        this.state = 457;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===56 || _la===59) {
	            this.state = 455;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 56:
	                this.state = 453;
	                this.patternOpenPart();
	                break;
	            case 59:
	                this.state = 454;
	                this.patternOpenField();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 459;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 460;
	        this.match(xplParser.PO_Close);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternOpenPart() {
	    let localctx = new PatternOpenPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, xplParser.RULE_patternOpenPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 462;
	        		this.match(xplParser.PO_Part);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 465; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,54, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternOpenField() {
	    let localctx = new PatternOpenFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, xplParser.RULE_patternOpenField);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 467;
	        this.match(xplParser.PO_FieldOpen);
	        this.state = 469;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 4)) & ~0x1f) === 0 && ((1 << (_la - 4)) & 2149517333) !== 0)) {
	            this.state = 468;
	            this.formulaic();
	        }

	        this.state = 471;
	        this.match(xplParser.CurlyClose);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, xplParser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 473;
	        this.match(xplParser.StringOpen);
	        this.state = 478;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===62 || _la===65) {
	            this.state = 476;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 62:
	                this.state = 474;
	                this.stringPart();
	                break;
	            case 65:
	                this.state = 475;
	                this.stringField();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 480;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 481;
	        this.match(xplParser.S_StringClose);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringPart() {
	    let localctx = new StringPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, xplParser.RULE_stringPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 484; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 483;
	        		this.match(xplParser.S_StringPart);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 486; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,58, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringField() {
	    let localctx = new StringFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, xplParser.RULE_stringField);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 488;
	        this.match(xplParser.S_StringFieldOpen);
	        this.state = 490;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 4)) & ~0x1f) === 0 && ((1 << (_la - 4)) & 2149517333) !== 0)) {
	            this.state = 489;
	            this.formulaic();
	        }

	        this.state = 492;
	        this.match(xplParser.CurlyClose);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, xplParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 494;
	        this.match(xplParser.Label);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

xplParser.EOF = antlr4.Token.EOF;
xplParser.HashBang = 1;
xplParser.BraceOpen = 2;
xplParser.BraceClose = 3;
xplParser.ParenOpen = 4;
xplParser.ParenClose = 5;
xplParser.TableOpen = 6;
xplParser.TableClose = 7;
xplParser.FormulaChar = 8;
xplParser.Null = 9;
xplParser.Star = 10;
xplParser.Bang = 11;
xplParser.Assign = 12;
xplParser.Pipe = 13;
xplParser.Dot = 14;
xplParser.ParentCall = 15;
xplParser.TypeTable = 16;
xplParser.TypeBool = 17;
xplParser.TypeString = 18;
xplParser.TypeCustom = 19;
xplParser.HexInteger = 20;
xplParser.OctalInteger = 21;
xplParser.DecimalInteger = 22;
xplParser.Decimal = 23;
xplParser.Label = 24;
xplParser.Ws = 25;
xplParser.Comment = 26;
xplParser.CommentLine = 27;
xplParser.Annotation = 28;
xplParser.CurlyOpen = 29;
xplParser.CurlyClose = 30;
xplParser.P_Open = 31;
xplParser.PE_Open = 32;
xplParser.PH_Open = 33;
xplParser.PO_Open = 34;
xplParser.StringOpen = 35;
xplParser.P_Part = 36;
xplParser.P_Dig = 37;
xplParser.P_Dir = 38;
xplParser.P_Esc = 39;
xplParser.P_FieldEsc = 40;
xplParser.P_FieldOpen = 41;
xplParser.P_Literal = 42;
xplParser.P_Close = 43;
xplParser.PE_Part = 44;
xplParser.PE_Esc = 45;
xplParser.PE_FieldEsc = 46;
xplParser.PE_FieldOpen = 47;
xplParser.PE_Literal = 48;
xplParser.PE_Close = 49;
xplParser.PH_Part = 50;
xplParser.PH_Esc = 51;
xplParser.PH_FieldEsc = 52;
xplParser.PH_FieldOpen = 53;
xplParser.PH_Literal = 54;
xplParser.PH_Close = 55;
xplParser.PO_Part = 56;
xplParser.PO_Esc = 57;
xplParser.PO_FieldEsc = 58;
xplParser.PO_FieldOpen = 59;
xplParser.PO_Literal = 60;
xplParser.PO_Close = 61;
xplParser.S_StringPart = 62;
xplParser.S_StringEsc = 63;
xplParser.S_StringFieldEsc = 64;
xplParser.S_StringFieldOpen = 65;
xplParser.S_StringLiteral = 66;
xplParser.S_StringClose = 67;

xplParser.RULE_parse = 0;
xplParser.RULE_hashBangs = 1;
xplParser.RULE_hashBang = 2;
xplParser.RULE_patchDef = 3;
xplParser.RULE_patchParent = 4;
xplParser.RULE_match = 5;
xplParser.RULE_pattern = 6;
xplParser.RULE_batch = 7;
xplParser.RULE_batchItem = 8;
xplParser.RULE_protect = 9;
xplParser.RULE_priv = 10;
xplParser.RULE_mutable = 11;
xplParser.RULE_nullable = 12;
xplParser.RULE_unique = 13;
xplParser.RULE_batchLabel = 14;
xplParser.RULE_null = 15;
xplParser.RULE_formulaDef = 16;
xplParser.RULE_type = 17;
xplParser.RULE_typeNative = 18;
xplParser.RULE_typeTable = 19;
xplParser.RULE_typeBool = 20;
xplParser.RULE_typeString = 21;
xplParser.RULE_typeCustom = 22;
xplParser.RULE_typeLabel = 23;
xplParser.RULE_hatch = 24;
xplParser.RULE_formulaicPiped = 25;
xplParser.RULE_alias = 26;
xplParser.RULE_formulaic = 27;
xplParser.RULE_parentCall = 28;
xplParser.RULE_formulaCall = 29;
xplParser.RULE_formulaLabel = 30;
xplParser.RULE_formulaCallItem = 31;
xplParser.RULE_field = 32;
xplParser.RULE_module = 33;
xplParser.RULE_piped = 34;
xplParser.RULE_exceptional = 35;
xplParser.RULE_table = 36;
xplParser.RULE_number = 37;
xplParser.RULE_decimalInteger = 38;
xplParser.RULE_decimal = 39;
xplParser.RULE_hexInteger = 40;
xplParser.RULE_octalInteger = 41;
xplParser.RULE_path = 42;
xplParser.RULE_pathPart = 43;
xplParser.RULE_pathDirect = 44;
xplParser.RULE_pathDig = 45;
xplParser.RULE_pathField = 46;
xplParser.RULE_patternEasy = 47;
xplParser.RULE_patternEasyPart = 48;
xplParser.RULE_patternEasyField = 49;
xplParser.RULE_patternHard = 50;
xplParser.RULE_patternHardPart = 51;
xplParser.RULE_patternHardField = 52;
xplParser.RULE_patternOpen = 53;
xplParser.RULE_patternOpenPart = 54;
xplParser.RULE_patternOpenField = 55;
xplParser.RULE_string = 56;
xplParser.RULE_stringPart = 57;
xplParser.RULE_stringField = 58;
xplParser.RULE_label = 59;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_parse;
    }

	EOF() {
	    return this.getToken(xplParser.EOF, 0);
	};

	hashBangs() {
	    return this.getTypedRuleContext(HashBangsContext,0);
	};

	patchDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatchDefContext);
	    } else {
	        return this.getTypedRuleContext(PatchDefContext,i);
	    }
	};

	formulaic = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaicContext);
	    } else {
	        return this.getTypedRuleContext(FormulaicContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitParse(this);
		}
	}


}



class HashBangsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_hashBangs;
    }

	hashBang = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HashBangContext);
	    } else {
	        return this.getTypedRuleContext(HashBangContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterHashBangs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitHashBangs(this);
		}
	}


}



class HashBangContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_hashBang;
    }

	HashBang() {
	    return this.getToken(xplParser.HashBang, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterHashBang(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitHashBang(this);
		}
	}


}



class PatchDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_patchDef;
    }

	match() {
	    return this.getTypedRuleContext(MatchContext,0);
	};

	BraceOpen() {
	    return this.getToken(xplParser.BraceOpen, 0);
	};

	patchParent() {
	    return this.getTypedRuleContext(PatchParentContext,0);
	};

	BraceClose() {
	    return this.getToken(xplParser.BraceClose, 0);
	};

	ParenOpen() {
	    return this.getToken(xplParser.ParenOpen, 0);
	};

	batch() {
	    return this.getTypedRuleContext(BatchContext,0);
	};

	ParenClose() {
	    return this.getToken(xplParser.ParenClose, 0);
	};

	CurlyOpen() {
	    return this.getToken(xplParser.CurlyOpen, 0);
	};

	hatch() {
	    return this.getTypedRuleContext(HatchContext,0);
	};

	CurlyClose() {
	    return this.getToken(xplParser.CurlyClose, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPatchDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPatchDef(this);
		}
	}


}



class PatchParentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_patchParent;
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	typeNative() {
	    return this.getTypedRuleContext(TypeNativeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPatchParent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPatchParent(this);
		}
	}


}



class MatchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_match;
    }

	Assign = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xplParser.Assign);
	    } else {
	        return this.getToken(xplParser.Assign, i);
	    }
	};


	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	formulaCall() {
	    return this.getTypedRuleContext(FormulaCallContext,0);
	};

	pattern() {
	    return this.getTypedRuleContext(PatternContext,0);
	};

	null_() {
	    return this.getTypedRuleContext(NullContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterMatch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitMatch(this);
		}
	}


}



class PatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_pattern;
    }

	patternEasy() {
	    return this.getTypedRuleContext(PatternEasyContext,0);
	};

	patternHard() {
	    return this.getTypedRuleContext(PatternHardContext,0);
	};

	patternOpen() {
	    return this.getTypedRuleContext(PatternOpenContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPattern(this);
		}
	}


}



class BatchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_batch;
    }

	batchItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BatchItemContext);
	    } else {
	        return this.getTypedRuleContext(BatchItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterBatch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitBatch(this);
		}
	}


}



class BatchItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_batchItem;
    }

	batchLabel() {
	    return this.getTypedRuleContext(BatchLabelContext,0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	protect() {
	    return this.getTypedRuleContext(ProtectContext,0);
	};

	priv() {
	    return this.getTypedRuleContext(PrivContext,0);
	};

	mutable() {
	    return this.getTypedRuleContext(MutableContext,0);
	};

	nullable() {
	    return this.getTypedRuleContext(NullableContext,0);
	};

	unique() {
	    return this.getTypedRuleContext(UniqueContext,0);
	};

	Assign() {
	    return this.getToken(xplParser.Assign, 0);
	};

	formulaic() {
	    return this.getTypedRuleContext(FormulaicContext,0);
	};

	formulaDef() {
	    return this.getTypedRuleContext(FormulaDefContext,0);
	};

	table() {
	    return this.getTypedRuleContext(TableContext,0);
	};

	null_() {
	    return this.getTypedRuleContext(NullContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterBatchItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitBatchItem(this);
		}
	}


}



class ProtectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_protect;
    }

	Bang() {
	    return this.getToken(xplParser.Bang, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterProtect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitProtect(this);
		}
	}


}



class PrivContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_priv;
    }

	Bang() {
	    return this.getToken(xplParser.Bang, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPriv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPriv(this);
		}
	}


}



class MutableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_mutable;
    }

	Bang() {
	    return this.getToken(xplParser.Bang, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterMutable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitMutable(this);
		}
	}


}



class NullableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_nullable;
    }

	Bang() {
	    return this.getToken(xplParser.Bang, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterNullable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitNullable(this);
		}
	}


}



class UniqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_unique;
    }

	Star() {
	    return this.getToken(xplParser.Star, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterUnique(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitUnique(this);
		}
	}


}



class BatchLabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_batchLabel;
    }

	Label() {
	    return this.getToken(xplParser.Label, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterBatchLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitBatchLabel(this);
		}
	}


}



class NullContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_null;
    }

	Null() {
	    return this.getToken(xplParser.Null, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterNull(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitNull(this);
		}
	}


}



class FormulaDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_formulaDef;
    }

	CurlyOpen() {
	    return this.getToken(xplParser.CurlyOpen, 0);
	};

	formulaicPiped() {
	    return this.getTypedRuleContext(FormulaicPipedContext,0);
	};

	CurlyClose() {
	    return this.getToken(xplParser.CurlyClose, 0);
	};

	ParenOpen() {
	    return this.getToken(xplParser.ParenOpen, 0);
	};

	batch() {
	    return this.getTypedRuleContext(BatchContext,0);
	};

	ParenClose() {
	    return this.getToken(xplParser.ParenClose, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterFormulaDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitFormulaDef(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_type;
    }

	typeTable() {
	    return this.getTypedRuleContext(TypeTableContext,0);
	};

	typeBool() {
	    return this.getTypedRuleContext(TypeBoolContext,0);
	};

	typeString() {
	    return this.getTypedRuleContext(TypeStringContext,0);
	};

	typeCustom() {
	    return this.getTypedRuleContext(TypeCustomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitType(this);
		}
	}


}



class TypeNativeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_typeNative;
    }

	typeTable() {
	    return this.getTypedRuleContext(TypeTableContext,0);
	};

	typeBool() {
	    return this.getTypedRuleContext(TypeBoolContext,0);
	};

	typeString() {
	    return this.getTypedRuleContext(TypeStringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterTypeNative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitTypeNative(this);
		}
	}


}



class TypeTableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_typeTable;
    }

	TypeTable() {
	    return this.getToken(xplParser.TypeTable, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterTypeTable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitTypeTable(this);
		}
	}


}



class TypeBoolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_typeBool;
    }

	TypeBool() {
	    return this.getToken(xplParser.TypeBool, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterTypeBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitTypeBool(this);
		}
	}


}



class TypeStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_typeString;
    }

	TypeString() {
	    return this.getToken(xplParser.TypeString, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterTypeString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitTypeString(this);
		}
	}


}



class TypeCustomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_typeCustom;
    }

	TypeCustom() {
	    return this.getToken(xplParser.TypeCustom, 0);
	};

	typeLabel() {
	    return this.getTypedRuleContext(TypeLabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterTypeCustom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitTypeCustom(this);
		}
	}


}



class TypeLabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_typeLabel;
    }

	Label() {
	    return this.getToken(xplParser.Label, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterTypeLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitTypeLabel(this);
		}
	}


}



class HatchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_hatch;
    }

	formulaicPiped = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaicPipedContext);
	    } else {
	        return this.getTypedRuleContext(FormulaicPipedContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterHatch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitHatch(this);
		}
	}


}



class FormulaicPipedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_formulaicPiped;
    }

	formulaic() {
	    return this.getTypedRuleContext(FormulaicContext,0);
	};

	alias() {
	    return this.getTypedRuleContext(AliasContext,0);
	};

	piped() {
	    return this.getTypedRuleContext(PipedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterFormulaicPiped(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitFormulaicPiped(this);
		}
	}


}



class AliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_alias;
    }

	Label() {
	    return this.getToken(xplParser.Label, 0);
	};

	Assign() {
	    return this.getToken(xplParser.Assign, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterAlias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitAlias(this);
		}
	}


}



class FormulaicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_formulaic;
    }

	formulaCall() {
	    return this.getTypedRuleContext(FormulaCallContext,0);
	};

	parentCall() {
	    return this.getTypedRuleContext(ParentCallContext,0);
	};

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	table() {
	    return this.getTypedRuleContext(TableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterFormulaic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitFormulaic(this);
		}
	}


}



class ParentCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_parentCall;
    }

	ParentCall() {
	    return this.getToken(xplParser.ParentCall, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterParentCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitParentCall(this);
		}
	}


}



class FormulaCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_formulaCall;
    }

	formulaLabel() {
	    return this.getTypedRuleContext(FormulaLabelContext,0);
	};

	ParenClose() {
	    return this.getToken(xplParser.ParenClose, 0);
	};

	exceptional() {
	    return this.getTypedRuleContext(ExceptionalContext,0);
	};

	formulaCallItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaCallItemContext);
	    } else {
	        return this.getTypedRuleContext(FormulaCallItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterFormulaCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitFormulaCall(this);
		}
	}


}



class FormulaLabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_formulaLabel;
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	ParenOpen() {
	    return this.getToken(xplParser.ParenOpen, 0);
	};

	FormulaChar = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xplParser.FormulaChar);
	    } else {
	        return this.getToken(xplParser.FormulaChar, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterFormulaLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitFormulaLabel(this);
		}
	}


}



class FormulaCallItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_formulaCallItem;
    }

	formulaic() {
	    return this.getTypedRuleContext(FormulaicContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	Assign() {
	    return this.getToken(xplParser.Assign, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterFormulaCallItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitFormulaCallItem(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_field;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	module() {
	    return this.getTypedRuleContext(ModuleContext,0);
	};

	Dot() {
	    return this.getToken(xplParser.Dot, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitField(this);
		}
	}


}



class ModuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_module;
    }

	Label() {
	    return this.getToken(xplParser.Label, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitModule(this);
		}
	}


}



class PipedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_piped;
    }

	Pipe() {
	    return this.getToken(xplParser.Pipe, 0);
	};

	formulaicPiped() {
	    return this.getTypedRuleContext(FormulaicPipedContext,0);
	};

	alias() {
	    return this.getTypedRuleContext(AliasContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPiped(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPiped(this);
		}
	}


}



class ExceptionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_exceptional;
    }

	match() {
	    return this.getTypedRuleContext(MatchContext,0);
	};

	CurlyOpen() {
	    return this.getToken(xplParser.CurlyOpen, 0);
	};

	formulaic() {
	    return this.getTypedRuleContext(FormulaicContext,0);
	};

	CurlyClose() {
	    return this.getToken(xplParser.CurlyClose, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterExceptional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitExceptional(this);
		}
	}


}



class TableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_table;
    }

	ParenOpen() {
	    return this.getToken(xplParser.ParenOpen, 0);
	};

	batch() {
	    return this.getTypedRuleContext(BatchContext,0);
	};

	ParenClose() {
	    return this.getToken(xplParser.ParenClose, 0);
	};

	TableOpen = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xplParser.TableOpen);
	    } else {
	        return this.getToken(xplParser.TableOpen, i);
	    }
	};


	TableClose = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xplParser.TableClose);
	    } else {
	        return this.getToken(xplParser.TableClose, i);
	    }
	};


	formulaic = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaicContext);
	    } else {
	        return this.getTypedRuleContext(FormulaicContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterTable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitTable(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_number;
    }

	decimalInteger() {
	    return this.getTypedRuleContext(DecimalIntegerContext,0);
	};

	decimal() {
	    return this.getTypedRuleContext(DecimalContext,0);
	};

	hexInteger() {
	    return this.getTypedRuleContext(HexIntegerContext,0);
	};

	octalInteger() {
	    return this.getTypedRuleContext(OctalIntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitNumber(this);
		}
	}


}



class DecimalIntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_decimalInteger;
    }

	DecimalInteger() {
	    return this.getToken(xplParser.DecimalInteger, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterDecimalInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitDecimalInteger(this);
		}
	}


}



class DecimalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_decimal;
    }

	Decimal() {
	    return this.getToken(xplParser.Decimal, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterDecimal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitDecimal(this);
		}
	}


}



class HexIntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_hexInteger;
    }

	HexInteger() {
	    return this.getToken(xplParser.HexInteger, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterHexInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitHexInteger(this);
		}
	}


}



class OctalIntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_octalInteger;
    }

	OctalInteger() {
	    return this.getToken(xplParser.OctalInteger, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterOctalInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitOctalInteger(this);
		}
	}


}



class PathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_path;
    }

	P_Open() {
	    return this.getToken(xplParser.P_Open, 0);
	};

	P_Close() {
	    return this.getToken(xplParser.P_Close, 0);
	};

	pathPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PathPartContext);
	    } else {
	        return this.getTypedRuleContext(PathPartContext,i);
	    }
	};

	pathDirect = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PathDirectContext);
	    } else {
	        return this.getTypedRuleContext(PathDirectContext,i);
	    }
	};

	pathDig = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PathDigContext);
	    } else {
	        return this.getTypedRuleContext(PathDigContext,i);
	    }
	};

	pathField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PathFieldContext);
	    } else {
	        return this.getTypedRuleContext(PathFieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPath(this);
		}
	}


}



class PathPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_pathPart;
    }

	P_Part = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xplParser.P_Part);
	    } else {
	        return this.getToken(xplParser.P_Part, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPathPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPathPart(this);
		}
	}


}



class PathDirectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_pathDirect;
    }

	P_Dir() {
	    return this.getToken(xplParser.P_Dir, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPathDirect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPathDirect(this);
		}
	}


}



class PathDigContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_pathDig;
    }

	P_Dig() {
	    return this.getToken(xplParser.P_Dig, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPathDig(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPathDig(this);
		}
	}


}



class PathFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_pathField;
    }

	P_FieldOpen() {
	    return this.getToken(xplParser.P_FieldOpen, 0);
	};

	CurlyClose() {
	    return this.getToken(xplParser.CurlyClose, 0);
	};

	formulaic() {
	    return this.getTypedRuleContext(FormulaicContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPathField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPathField(this);
		}
	}


}



class PatternEasyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_patternEasy;
    }

	PE_Open() {
	    return this.getToken(xplParser.PE_Open, 0);
	};

	PE_Close() {
	    return this.getToken(xplParser.PE_Close, 0);
	};

	patternEasyPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatternEasyPartContext);
	    } else {
	        return this.getTypedRuleContext(PatternEasyPartContext,i);
	    }
	};

	patternEasyField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatternEasyFieldContext);
	    } else {
	        return this.getTypedRuleContext(PatternEasyFieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPatternEasy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPatternEasy(this);
		}
	}


}



class PatternEasyPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_patternEasyPart;
    }

	PE_Part = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xplParser.PE_Part);
	    } else {
	        return this.getToken(xplParser.PE_Part, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPatternEasyPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPatternEasyPart(this);
		}
	}


}



class PatternEasyFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_patternEasyField;
    }

	PE_FieldOpen() {
	    return this.getToken(xplParser.PE_FieldOpen, 0);
	};

	CurlyClose() {
	    return this.getToken(xplParser.CurlyClose, 0);
	};

	formulaic() {
	    return this.getTypedRuleContext(FormulaicContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPatternEasyField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPatternEasyField(this);
		}
	}


}



class PatternHardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_patternHard;
    }

	PH_Open() {
	    return this.getToken(xplParser.PH_Open, 0);
	};

	PH_Close() {
	    return this.getToken(xplParser.PH_Close, 0);
	};

	patternHardPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatternHardPartContext);
	    } else {
	        return this.getTypedRuleContext(PatternHardPartContext,i);
	    }
	};

	patternHardField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatternHardFieldContext);
	    } else {
	        return this.getTypedRuleContext(PatternHardFieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPatternHard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPatternHard(this);
		}
	}


}



class PatternHardPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_patternHardPart;
    }

	PH_Part = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xplParser.PH_Part);
	    } else {
	        return this.getToken(xplParser.PH_Part, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPatternHardPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPatternHardPart(this);
		}
	}


}



class PatternHardFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_patternHardField;
    }

	PH_FieldOpen() {
	    return this.getToken(xplParser.PH_FieldOpen, 0);
	};

	CurlyClose() {
	    return this.getToken(xplParser.CurlyClose, 0);
	};

	formulaic() {
	    return this.getTypedRuleContext(FormulaicContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPatternHardField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPatternHardField(this);
		}
	}


}



class PatternOpenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_patternOpen;
    }

	PO_Open() {
	    return this.getToken(xplParser.PO_Open, 0);
	};

	PO_Close() {
	    return this.getToken(xplParser.PO_Close, 0);
	};

	patternOpenPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatternOpenPartContext);
	    } else {
	        return this.getTypedRuleContext(PatternOpenPartContext,i);
	    }
	};

	patternOpenField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatternOpenFieldContext);
	    } else {
	        return this.getTypedRuleContext(PatternOpenFieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPatternOpen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPatternOpen(this);
		}
	}


}



class PatternOpenPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_patternOpenPart;
    }

	PO_Part = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xplParser.PO_Part);
	    } else {
	        return this.getToken(xplParser.PO_Part, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPatternOpenPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPatternOpenPart(this);
		}
	}


}



class PatternOpenFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_patternOpenField;
    }

	PO_FieldOpen() {
	    return this.getToken(xplParser.PO_FieldOpen, 0);
	};

	CurlyClose() {
	    return this.getToken(xplParser.CurlyClose, 0);
	};

	formulaic() {
	    return this.getTypedRuleContext(FormulaicContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterPatternOpenField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitPatternOpenField(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_string;
    }

	StringOpen() {
	    return this.getToken(xplParser.StringOpen, 0);
	};

	S_StringClose() {
	    return this.getToken(xplParser.S_StringClose, 0);
	};

	stringPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringPartContext);
	    } else {
	        return this.getTypedRuleContext(StringPartContext,i);
	    }
	};

	stringField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringFieldContext);
	    } else {
	        return this.getTypedRuleContext(StringFieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitString(this);
		}
	}


}



class StringPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_stringPart;
    }

	S_StringPart = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(xplParser.S_StringPart);
	    } else {
	        return this.getToken(xplParser.S_StringPart, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterStringPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitStringPart(this);
		}
	}


}



class StringFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_stringField;
    }

	S_StringFieldOpen() {
	    return this.getToken(xplParser.S_StringFieldOpen, 0);
	};

	CurlyClose() {
	    return this.getToken(xplParser.CurlyClose, 0);
	};

	formulaic() {
	    return this.getTypedRuleContext(FormulaicContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterStringField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitStringField(this);
		}
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = xplParser.RULE_label;
    }

	Label() {
	    return this.getToken(xplParser.Label, 0);
	};

	enterRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof xplParserListener ) {
	        listener.exitLabel(this);
		}
	}


}




xplParser.ParseContext = ParseContext; 
xplParser.HashBangsContext = HashBangsContext; 
xplParser.HashBangContext = HashBangContext; 
xplParser.PatchDefContext = PatchDefContext; 
xplParser.PatchParentContext = PatchParentContext; 
xplParser.MatchContext = MatchContext; 
xplParser.PatternContext = PatternContext; 
xplParser.BatchContext = BatchContext; 
xplParser.BatchItemContext = BatchItemContext; 
xplParser.ProtectContext = ProtectContext; 
xplParser.PrivContext = PrivContext; 
xplParser.MutableContext = MutableContext; 
xplParser.NullableContext = NullableContext; 
xplParser.UniqueContext = UniqueContext; 
xplParser.BatchLabelContext = BatchLabelContext; 
xplParser.NullContext = NullContext; 
xplParser.FormulaDefContext = FormulaDefContext; 
xplParser.TypeContext = TypeContext; 
xplParser.TypeNativeContext = TypeNativeContext; 
xplParser.TypeTableContext = TypeTableContext; 
xplParser.TypeBoolContext = TypeBoolContext; 
xplParser.TypeStringContext = TypeStringContext; 
xplParser.TypeCustomContext = TypeCustomContext; 
xplParser.TypeLabelContext = TypeLabelContext; 
xplParser.HatchContext = HatchContext; 
xplParser.FormulaicPipedContext = FormulaicPipedContext; 
xplParser.AliasContext = AliasContext; 
xplParser.FormulaicContext = FormulaicContext; 
xplParser.ParentCallContext = ParentCallContext; 
xplParser.FormulaCallContext = FormulaCallContext; 
xplParser.FormulaLabelContext = FormulaLabelContext; 
xplParser.FormulaCallItemContext = FormulaCallItemContext; 
xplParser.FieldContext = FieldContext; 
xplParser.ModuleContext = ModuleContext; 
xplParser.PipedContext = PipedContext; 
xplParser.ExceptionalContext = ExceptionalContext; 
xplParser.TableContext = TableContext; 
xplParser.NumberContext = NumberContext; 
xplParser.DecimalIntegerContext = DecimalIntegerContext; 
xplParser.DecimalContext = DecimalContext; 
xplParser.HexIntegerContext = HexIntegerContext; 
xplParser.OctalIntegerContext = OctalIntegerContext; 
xplParser.PathContext = PathContext; 
xplParser.PathPartContext = PathPartContext; 
xplParser.PathDirectContext = PathDirectContext; 
xplParser.PathDigContext = PathDigContext; 
xplParser.PathFieldContext = PathFieldContext; 
xplParser.PatternEasyContext = PatternEasyContext; 
xplParser.PatternEasyPartContext = PatternEasyPartContext; 
xplParser.PatternEasyFieldContext = PatternEasyFieldContext; 
xplParser.PatternHardContext = PatternHardContext; 
xplParser.PatternHardPartContext = PatternHardPartContext; 
xplParser.PatternHardFieldContext = PatternHardFieldContext; 
xplParser.PatternOpenContext = PatternOpenContext; 
xplParser.PatternOpenPartContext = PatternOpenPartContext; 
xplParser.PatternOpenFieldContext = PatternOpenFieldContext; 
xplParser.StringContext = StringContext; 
xplParser.StringPartContext = StringPartContext; 
xplParser.StringFieldContext = StringFieldContext; 
xplParser.LabelContext = LabelContext; 
