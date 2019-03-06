export let sortTable = {
    sort_table: (headers, rows, sortKey) => {
    if(!sortKey) return;

    let sorted = false;

    headers = headers.map((item) => {
        if(item.sortKey === sortKey){
            if(item.asc === '-asc'){
                sorted = true;
                return {...item, asc: '-desc'}
            } else {
                sorted = false;
                return {...item, asc: '-asc'}
            }
            //  item.asc === '-desc' ? sorted = true : sorted = false;
            //  return {...item, asc: item.asc === '-asc' ? '-desc' : '-asc'}
        }
        return {...item, asc: ''}
    });

    rows = rows.sort(function(a,b) {
        if (a[sortKey] < b[sortKey])
            return -1;
        if (a[sortKey] > b[sortKey])
            return 1;
        return 0;
    } );

   if(sorted) rows.reverse(); 

    return {headers: headers, rows: rows};
}
} 