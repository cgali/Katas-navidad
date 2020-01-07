/*List Filtering*/


function filter_list(l) {
    let stringsFiltered = [];
    for (i=0; i < l.length; i++) {
        if (typeof l[i] === 'number') {
           stringsFiltered.push(l[i]);
        }
    }
    return stringsFiltered;
  }




filter_list([1,2,'a','b']);
filter_list([1,'a','b',0,15]);
filter_list([1,2,'aasf','1','123',123]);