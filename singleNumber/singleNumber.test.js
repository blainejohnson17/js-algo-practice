const singleNumber = require('./singleNumber');

describe('singleNumber', () => {
  // single number is a number that only occurs once in the list
  it('should return first single number in list', () => {
    expect(singleNumber([2, 2, 1])).toBe(1)
    expect(singleNumber([-280, 1548, -696, 1474, -161, 344, 903, 376, 387, 1594, 1050, 80, 540, 1145, -601, -701, -637, -741, 1095, 838, -329, -653, 1272, 806, -63, 776, 1227, -52, -455, 1239, -738, 389, 1072, -557, -366, 1066, 357, 658, 1255, 506, 438, 1475, -85, 1003, 1216, 1522, 458, -107, 268, 1371, 811, 530, -478, 299, 1319, -376, 472, 1378, 44, -424, 193, 124, -404, -317, 1428, -95, -72, -159, 584, 723, 819, 1012, 1388, 1524, -552, 227, 920, -324, -1, 1534, -546, 956, 295, 130, 798, 75, -315, 295, -526, -345, -82, 217, 133, 1593, 1251, 1590, -562, 320, 488, 980, 603, -271, 922, 1428, 1357, 1017, 1444, -313, 1239, -441, -392, 1574, 1377, 715, 740, 163, -296, 1083, 1209, 1448, -108, 1488, 614, 1226, 463, 804, -256, 246, 890, 559, 456, 108, 1591, 1592, 376, -31, -734, -135, 1402, 629, 1197, 1364, 1378, -3, 1020, 144, 1059, 963, -276, 1059, -718, 629, 566, -133, 980, -6, -785, 798, 604, -76, 1223, 1246, -523, 188, 910, -623, -104, 1304, 534, 949, 1097, -605, 838, 1125, 1296, -115, 1353, 1201, 360, 133, -226, 466, 31, 1439, -689, 672, 952, -289, 679, 64, 570, -395, 896, 1202, 71, 1465, 1202, -209, -374, 611, -20, 601, 1512, -742, 1192, -169, -81, 560, 793, 249, -404, -234, 1591, 1593, 256, 945, 108, -350, -598, 840, 354, -307, 500, 1384, 735, 249, -796, 404, -728, 1047, 145, 551, 1437, 1493, 51, -345, 1480, 166, 570, 82, -481, 1279, -352, -189, -590, 1135, 371, -463, -100, 173, 120, 452, 142, -150, -3, 1199, 1330, 112, -733, 260, -148, 446, 1142, 160, 1097, 977, 15, 354, -744, 1492, -771, -322, 981, -388, -786, 760, -383, 1448, 128, -388, 342, 664, 1524, 1416, -169, 450, -23, -598, 1299, 1409, -235, -743, 1303, 1321, -693, 1584, -109, -62, 1447, 383, -297, 955, 802, 206, 1135, 115, 718, 106, 1540, 971, 817, 87, 1465, 1423, -234, 3, 188, -790, -347, -166, 1072, 1572, 1568, 1192, 1081, 496, -426, 920, -796, 123, 555, 1583, 515, 203, 20, -40, 418, -557, 221, 1327, -64, 751, 1026, 166, 1288, 208, -463, 307, 840, -450, 1083, 909, 365, 1572, 84, -520, 990, 142, 1148, 371, 981, 575, 179, 563, 1310, -696, 1420, 603, -612, 793, -229, -276, -576, -569, 899, 458, 566, 1263, -619, 1335, 441, 733, 679, -744, 1081, 788, 1107, -300, 1043, -359, -604, -256, -171, 804, 689, -705, 1282, 290, 15, 594, -334, -632, -619, 1327, 228, -329, 1343, -301, -252, 1279, -20, -5, 1422, 1162, 572, -795, -7, 1453, 1496, -683, 1350, -474, 256, -149, 1409, -390, -456, 1077, -637, -627, 1447, 1547, 1480, 1479, 367, 1142, -741, 1289, -541, 1087, 1363, -576, 776, 1099, 493, -424, -798, -601, -339, 48, 1269, -726, -274, 1547, 1500, 25, 584, 250, -315, -84, 954, 261, -339, 1045, 689, 1049, -481, 483, -714, 680, -664, 1494, -338, -709, 429, 796, 1115, -144, 307, 212, 480, -579, -215, -41, -567, 178, 969, -408, 61, 431, -307, -433, -221, 1397, -385, -569, 1019, 160, 573, -567, -702, 555, 1549, 344, 162, 431, 1441, 267, -263, -734, 1191, 318, -543, 1042, -455, 896, 1235, -117, 254, 1276, -743, -439, 1037, 1080, 284, 406, 1133, 662, -72, 1106, 246, 0, 1353, -200, -100, 1033, 135, 208, 865, 477, -314, 695, 144, -600, 228, 1513, 1184, -19, 21, 966, -370, -66, 597, 1136, 510, 61, -751, 948, 76, 650, -540, 1371, -691, 261, 631, 659, 76, -520, -742, 264, 739, -338, -161, 68, 183, 145, 374, 867, -503, 1581, 1523, 1534, 294, 1061, 1582, -237, 1237, 1530, 406, 66, -535, -677, -152, -252, 991, -300, 612, -231, 1118, 1191, -73, 1311, 695, -207, -691, 97, 823, 140, -249, 1512, 357, -786, 925, -146, -362, 1062, 396, -658, -675, 549, 1235, 748, 702, 1058, 1231, 748, 841, 564, 543, 16, 335, -737, 1017, 1505, 1003, 823, 454, 950, 478, 1368, 721, -374, -605, 1289, -313, 790, 1188, 1045, 1080, 292, -718, 290, 1422, 477, -666, -683, -456, -76, -62, 897, 716, -1, -477, -756, 339, 177, 1041, 83, 1272, -221, -664, -125, 1388, -236, 954, -237, -666, 727, 1273, 1439, -235, 898, 146, -273, -441, 464, 1248, -73, -350, 480, -288, -336, 704, 115, -326, -236, 1457, 1325, 1248, 1011, 1240, 885, 234, -136, -357, -627, 709, 1390, 593, 910, -133, 284, 51, -426, 703, 8, -195, -395, 193, 918, 1247, 1522, 715, 1031, 25, 272, 86, -483, 1162, 441, 921, 811, -141, -271, -54, 769, -347, 971, 1078, 743, 1062, 223, 897, 524, 21, 169, 297, 918, 802, 882, 863, 1182, 451, 250, 1300, -209, 1125, 45, 966, 457, 792, 713, 1050, 20, -225, 1042, 1167, 212, 1261, 1109, 955, -604, 8, -526, -337, 658, 1487, 990, 486, 48, 486, 389, 667, 1296, 1479, 1467, 515, 812, 405, 124, 468, 163, 177, 260, -322, 919, 925, 99, 612, -296, -112, 1019, 890, 1469, 814, 1530, 972, 1029, 815, 726, -334, -612, 1306, 968, 466, 267, 1109, 1505, 1350, 1377, 272, 960, 1330, 75, 422, -332, -2, -733, 825, 318, -366, -785, 1103, 86, 433, 817, 106, 593, 1011, -780, 506, 492, 1282, -352, 1247, 968, -115, -343, 268, 37, 1363, 1047, 547, 1147, -281, -381, 101, 126, -106, 221, -215, 130, 34, -403, -152, -297, 733, -107, 514, -599, 623, 1104, 1401, 1077, 1311, 1384, 1441, 740, 909, 1182, 1099, -546, -146, 597, -709, 1500, 230, -81, 415, 1020, 1317, -685, 973, 502, -436, 71, 524, 1549, 498, -205, -543, 1029, 513, 423, 342, -751, 238, 743, 1420, 1066, -523, 80, 1574, 1521, -326, 1012, 1229, 1433, -675, 68, 821, 70, 739, 1004, -24, 374, -769, 953, 169, 1444, 500, 726, -171, 1453, 1098, 860, -245, 299, 333, -96, -23, 1118, 1188, 799, 614, 1496, 503, 600, -662, -487, 45, 156, 967, 502, -125, 182, -6, -632, 0, 865, -97, -552, -370, 1082, 1568, -547, -474, 1320, 602, -304, 794, 498, 1474, 1171, -379, 760, 1310, 1201, -580, -792, 1590, -715, 782, -577, 1153, -304, -21, 601, 1095, 120, 672, -383, -109, -66, 532, 1026, -540, 1317, 1106, -5, 611, -324, 945, 1399, 1120, -43, 1323, 64, 1319, -273, -761, -207, -141, 1520, 404, -798, -547, 1100, -535, 238, 151, 575, 602, 1216, 1494, 670, -318, -522, -205, 1306, -160, 1240, 1433, 678, -281, 1153, 496, 600, 1399, 1234, 82, 1068, 650, 825, 415, -136, -762, 594, -174, 1407, -64, 252, -353, -596, 1234, 534, 659, -288, 551, 1437, -715, 718, 474, 1405, -453, 1237, 833, 1369, -40, 977, -381, 549, 1584, 438, 259, 631, 1539, 1199, 1430, 1486, 93, 1273, -21, -516, -337, -353, 637, 678, 991, 1171, 1507, 1362, 1507, 1523, 1299, 1521, 1027, 790, 1418, 236, 1098, 1033, 953, 1263, -336, 723, 1573, 283, 380, 1227, 1594, 478, -135, -289, 1223, -386, 780, 424, 605, -562, 37, 452, 483, 721, 1255, 167, 922, 1341, 808, -71, 1581, -280, 915, -385, -182, -200, -705, -478, -96, 173, 1583, -149, 1184, 572, -7, -483, 41, -195, 960, 1323, -450, -503, -790, 451, 972, -771, 126, 1357, 560, 1385, -677, 1103, -249, -255, 1492, 1457, -255, 468, 1154, 503, 360, -245, 1139, 540, 316, -361, 773, 967, 595, 230, -762, -71, -452, 1269, 882, 1041, 5, -689, 808, 1148, 1027, 812, 664, 1167, 1502, 329, 773, 1120, 1369, 563, 1402, 616, -780, 329, 456, 1225, 780, -522, -723, 1139, 915, 474, -168, 183, 87, 794, -738, -623, 1251, 627, -175, 1290, -43, 1520, 845, 819, -357, 803, 41, 1548, -365, 1385, 704, 627, 44, 979, -332, 1495, 387, -174, 418, -24, 957, 156, 713, 957, -41, 662, 1049, 1368, 405, 1004, 315, -359, -314, 1304, 727, 450, 84, 99, -263, 1397, 1100, 529, 140, 1362, 364, 860, -97, -714, 792, 1226, -84, -457, 513, 1488, 973, 234, 806, 987, 921, 316, -432, 1051, 617, -452, 162, 264, 471, 1343, 254, -226, 1276, -635, 151, 1411, 863, 3, 623, 135, -104, -702, -599, 1037, -229, 362, 182, -301, 1475, 1405, -440, -189, 365, -277, -390, 948, 952, 1430, 1058, 604, -343, 1573, 637, -761, 1401, 339, 845, 367, 573, -693, -453, 1104, -108, 843, 1127, 493, -403, -662, 815, -61, 227, -31, 1147, -379, -653, 1539, 899, -82, 1303, 396, 1321, 754, 1154, 315, 1107, -378, 963, -579, 816, 203, 735, 702, 605, 492, 1043, 529, 1231, -54, -225, 16, -231, -117, 1288, 236, 1495, 769, 543, -440, 259, 670, 206, 596, -61, 1115, 168, 294, 833, -175, 283, -160, 1197, -317, 97, 1335, 655, -63, -52, 362, -361, 559, 1246, 1085, -19, -150, 979, 320, -144, 464, -477, 518, -795, 424, -261, 667, -701, 1261, 257, 919, 987, 898, -378, -148, 168, -685, -159, 333, 167, 128, 217, 1411, -362, 547, 1229, 514, 1320, -658, 187, 1085, 1087, 1423, -376, 1300, 1082, 1513, 223, 1416, 1168, 1341, 940, 34, 1136, 821, -204, 31, 788, 1582, -277, 83, 782, 463, -318, 843, 956, 429, -432, 292, 252, -773, 101, 123, 1168, -408, 716, 1051, 814, 1486, 595, -274, 532, 1145, 949, 200, 1209, 1502, 1364, -436, 1469, -168, 5, 364, -516, 335, -792, -756, 472, 816, 1078, -726, 1325, 1025, 93, 617, 42, 530, 70, 42, 1133, 200, 616, 380, 1418, -392, -600, -83, 969, 488, 936, -541, -95, 841, -433, 179, -737, -106, -635, 703, 1390, 936, 433, 446, 1540, 867, -590, -769, 1061, 803, -487, -204, 484, 1068, 423, 1592, 796, 1467, 1225, 709, 66, 564, 422, -83, 146, -728, -365, -580, -182, 383, 680, 1127, -750, -577, -261, 754, 510, -723, 1407, 885, -750, 257, -439, 940, 655, -166, 112, 454, 596, 297, 1493, 1487, 1290, 484, 903, 348, -457, -596, 348, -386, 950, 187, 751, -773, -2, 471, 1025, 1096, 799, -85, 1096, 457, 178, 1031, 518])).toBe(-112);
  });
})