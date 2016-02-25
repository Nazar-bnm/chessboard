(function() {
    'use strict';
    var tableData = {
        border: '1px solid #000000',
        width: '50%',
        margin: '0 auto',
        borderCollapse: 'collapse',
        'min-width': '320px',
        class: 'table'
    };
    var square = {
        width: '11.8%',
        border: '1px solid #000000',
        class: 'square'
    };
    //
    var arr = ['', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a', ''];
    //
    build();
    //
    function build() {
        createTable(tableData);
        headline(arr);
        createTbody(square);
        changeHeight();
    }

    function createTable(obj) {
        var table = $('<table></table>');
        $('body').append(table);
        for (var key in obj) {
            if (key === 'class') {
                table.attr(key, obj[key]);
            } else {
                table.css(key, obj[key]);
            }
        }
    }

    function createTbody(obj) {
        var tbody = $('<tbody></tbody>');
        $('.table').append(tbody);
        for (var i = 0; i < 8; i++) {
            var row = $('<tr></tr>');
            $('tbody').append(row);
            for (var j = 0; j < 10; j++) {
                var col = $('<th></th>');
                $(row).append(col);
                if (j !== 0 && j !== 9) {
                    for (var key in obj) {
                        if (key === 'class') {
                            col.attr(key, obj[key]);
                        } else {
                            col.css(key, obj[key]);
                        }
                    }
                    var n = i + j;
                    if (n % 2 === 0) {
                        col.css('background', '#000');
                    }
                } else {
                    col.text(i + 1);
                    col.attr('class', 'fieldNumber');
                }
            }
        }
    }

    function headline(arr) {
        var thead = $('<thead></thead>');
        $('.table').append(thead);
        var rowHead = $('<tr></tr>');
        $(thead).append(rowHead);
        //
        var tfoot = $('<tfoot></tfoot>');
        $('.table').append(tfoot);
        var rowFoot = $('<tr></tr>');
        $(tfoot).append(rowFoot);
        for (var i = 0; i < arr.length; i++) {
            //
            var colHead = $('<th></th>');
            $(rowHead).append(colHead);
            colHead.text(arr[i]);
            colHead.attr('class', 'fieldLetter');
            //
            var colFoot = $('<th></th>');
            $(rowFoot).append(colFoot);
            colFoot.text(arr[i]);
            colFoot.attr('class', 'fieldLetter');
        }
    }
    //
    function changeHeight() {
        $('.square').height($('.square').width());
        $('.fieldLetter').height($('.fieldNumber').width());
        $(window).resize(function() {
            $('.square').height($('.square').width());
            $('.fieldLetter').height($('.fieldNumber').width());
        });
    }
})();