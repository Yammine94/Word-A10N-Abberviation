function abbreviate(string) {
   var res, strArr, length, firstLetter, lastLetter;
   strArr = string;

   if (strArr.split(' ').length == 1) {
     if (strArr.indexOf('-') >= 0 && strArr.length > 3) {
       strArr = strArr.split('-');
       for (var i = 0; i < strArr.length; i++) {
         if (strArr[i].length > 3) {
           length = strArr[i].length - 2;
           firstLetter = strArr[i].slice(0, 1);
           lastLetter = strArr[i].slice(-1);
           strArr[i] = firstLetter + length + lastLetter;
         }
       }
       strArr = strArr.join('-');
     } else if (strArr.indexOf('-') < 0 && strArr.length > 3) {
       length = strArr.length - 2;
       firstLetter = strArr.slice(0, 1);
       lastLetter = strArr.slice(-1);
       strArr = firstLetter + length + lastLetter;
     }
   } else if (strArr.indexOf(', ') >= 0) {
     strArr = string.split(', ');
     for (var i = 0; i < strArr.length; i++) {
       strArr[i] = strArr[i].split(' ');
       for (var j = 0; j < strArr[i].length; j++) {
         if (strArr[i][j].indexOf('-') >= 0 && strArr[i][j].length > 3) {
           strArr[i][j] = strArr[i][j].split('-');
           for (var k = 0; k < strArr[i][j].length; k++) {
             if (strArr[i][j][k].length > 3) {
               length = strArr[i][j][k].length - 2;
               firstLetter = strArr[i][j][k].slice(0, 1);
               lastLetter = strArr[i][j][k].slice(-1);
               strArr[i][j][k] = firstLetter + length + lastLetter;
             }
           }
           strArr[i][j] = strArr[i][j].join('-');
         } else if (strArr[i][j].indexOf('-') < 0 && strArr[i][j].length > 3) {
           length = strArr[i][j].length - 2;
           firstLetter = strArr[i][j].slice(0, 1);
           lastLetter = strArr[i][j].slice(-1);
           strArr[i][j] = firstLetter + length + lastLetter;
         }
       }
       strArr[i] = strArr[i].join(' ');
     }
     strArr = strArr.join(', ');
   } else {
       strArr = strArr.split(' ');
     for (var i = 0; i < strArr.length; i++) {

      if (strArr[i].indexOf('-') >= 0 && strArr[i].length > 3) {
                 strArr[i] = strArr[i].split('-');

        for (var j = 0; j < strArr[i].length; j++) {
                     if (strArr[i][j].length > 3) {
                                    length = strArr[i][j].length - 2;

            firstLetter = strArr[i][j].slice(0, 1);

            lastLetter = strArr[i][j].slice(-1);

            strArr[i][j] = firstLetter + length + lastLetter;

          }

        }

        strArr[i] = strArr[i].join('-');

      } else if (strArr[i].indexOf('-') < 0 && strArr[i].length > 3) {

        length = strArr[i].length - 2;

        firstLetter = strArr[i].slice(0, 1);

        lastLetter = strArr[i].slice(-1);

        strArr[i] = firstLetter + length + lastLetter;

      }

    }

    strArr = strArr.join(' ');

  }

   res = strArr;
      return res;
     }