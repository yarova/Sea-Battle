$(function(){


    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    $.App = {

        init: function(){
            this.drawCells();
            this.drawLetters();
            this.drawNumbers();
            $("#playerField .demoShip").parent().draggable({ containment:'parent', stop: this._onDragEnd });
        },

        _onDragEnd: function(e){
           debugger;
        },

        drawCells: function(){
            var html = '';
            for(var i = 1; i <=10; i++){
                for(var y = 0; y < letters.length; y++) {
                    html = html + '<div class="cell" data-letter="' + letters[y] + '"data-number="' + i + '"></div>';
                }
            }
            $('.field').html(html);
        },

        drawLetters: function(){
            var html = '';
            for (var i = 0; i < letters.length; i++) {
                html = html + '<div class="cell letter">' + letters[i] + '</div>';
            }
            $('.letters').html(html);
        },

        drawNumbers: function(){
            var html = '';
            for (var i = 1; i <= 10; i++) {
                html = html + '<div class="cell number">' + i + '.' + '</div>';
            }
            $('.numbers').html(html);
        },

        getRandNumber: function(){
            var randCell = Math.round((Math.random() * 9)) + 1;
            return randCell;
        },

        selectRandomCell: function(){
            var randNumber = this.getRandNumber(),
                randLetter = this.getRandNumber();
            return $('#enemyField .cell[data-letter="' + letters[randLetter] + '"][data-number="' + randNumber + '"]');
        }

    };


    $.App.init();


    $('#playerField [data-letter="c"][data-number="1"]').addClass('ship quadruple');
    $('#playerField [data-letter="c"][data-number="2"]').addClass('ship quadruple');
    $('#playerField [data-letter="c"][data-number="3"]').addClass('ship quadruple');
    $('#playerField [data-letter="c"][data-number="4"]').addClass('ship quadruple');


    $('#playerField [data-letter="a"][data-number="7"]').addClass('ship triple');
    $('#playerField [data-letter="b"][data-number="7"]').addClass('ship triple');
    $('#playerField [data-letter="c"][data-number="7"]').addClass('ship triple');

    $('#playerField [data-letter="e"][data-number="10"]').addClass('ship triple');
    $('#playerField [data-letter="f"][data-number="10"]').addClass('ship triple');
    $('#playerField [data-letter="g"][data-number="10"]').addClass('ship triple');


    $('#playerField [data-letter="f"][data-number="3"]').addClass('ship double');
    $('#playerField [data-letter="f"][data-number="4"]').addClass('ship double');

    $('#playerField [data-letter="e"][data-number="6"]').addClass('ship double');
    $('#playerField [data-letter="e"][data-number="7"]').addClass('ship double');

    $('#playerField [data-letter="i"][data-number="2"]').addClass('ship double');
    $('#playerField [data-letter="j"][data-number="2"]').addClass('ship double');


    $('#playerField [data-letter="i"][data-number="10"]').addClass('ship single');
    $('#playerField [data-letter="i"][data-number="6"]').addClass('ship single');
    $('#playerField [data-letter="g"][data-number="1"]').addClass('ship single');
    $('#playerField [data-letter="b"][data-number="9"]').addClass('ship single');





    $('#enemyField [data-letter="c"][data-number="1"]').addClass('ship quadruple');
    $('#enemyField [data-letter="c"][data-number="2"]').addClass('ship quadruple');
    $('#enemyField [data-letter="c"][data-number="3"]').addClass('ship quadruple');
    $('#enemyField [data-letter="c"][data-number="4"]').addClass('ship quadruple');


    $('#enemyField [data-letter="a"][data-number="7"]').addClass('ship triple');
    $('#enemyField [data-letter="b"][data-number="7"]').addClass('ship triple');
    $('#enemyField [data-letter="c"][data-number="7"]').addClass('ship triple');

    $('#enemyField [data-letter="e"][data-number="10"]').addClass('ship triple');
    $('#enemyField [data-letter="f"][data-number="10"]').addClass('ship triple');
    $('#enemyField [data-letter="g"][data-number="10"]').addClass('ship triple');


    $('#enemyField [data-letter="f"][data-number="3"]').addClass('ship double');
    $('#enemyField [data-letter="f"][data-number="4"]').addClass('ship double');

    $('#enemyField [data-letter="e"][data-number="6"]').addClass('ship double');
    $('#enemyField [data-letter="e"][data-number="7"]').addClass('ship double');

    $('#enemyField [data-letter="i"][data-number="2"]').addClass('ship double');
    $('#enemyField [data-letter="j"][data-number="2"]').addClass('ship double');


    $('#enemyField [data-letter="i"][data-number="10"]').addClass('ship single');
    $('#enemyField [data-letter="i"][data-number="6"]').addClass('ship single');
    $('#enemyField [data-letter="g"][data-number="1"]').addClass('ship single');
    $('#enemyField [data-letter="b"][data-number="9"]').addClass('ship single');


    $('.button').on('click', function(){
        $(this).addClass('movingAnchor');
        setTimeout(function stopAnchor(){ $('.button').removeClass('movingAnchor'); }, 1000);
    });


    $('.cell').on('click', function(){
        if($(this).hasClass('single')){
            $(this).addClass('icon-sunken');
        }
        else if($(this).hasClass('ship')){
            $(this).addClass('icon-damaged');
        }
        else if($(this).hasClass('demoShip') || $(this).hasClass('number') || $(this).hasClass('letter')){
            return;
        }
        else {
            $(this).addClass('missed');
        }
    });







});


