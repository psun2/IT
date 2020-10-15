const Links = {
    SetColor: function (color) {
        // let alist = document.querySelectorAll('a');
        // let i = 0;
        // while (i < alist.length) {
        //     console.log(alist[i]);
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }

        $('a').css('color', color);
    }
};

const Body = {
    SetColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    SetBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
};

const Button = {
    nightDayHandler: function (self) {
        let target = document.querySelector('body');
        if (self.value === 'night') {
            Body.SetBackgroundColor('black');
            Body.SetColor('white');
            self.value = 'day'

            Links.SetColor('yellow');

        } else {
            Body.SetBackgroundColor('white');
            Body.SetColor('black');
            self.value = 'night'

            Links.SetColor('yellowgreen');
        }
        return
    }
};