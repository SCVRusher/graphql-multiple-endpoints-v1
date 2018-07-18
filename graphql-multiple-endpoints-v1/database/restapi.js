import fetch from 'node-fetch'

//create switch function to call out restful api json result and process them
const RandomQuote = {
    getOne() {
        switch (Math.floor((Math.random() * 3) + 1)) {
            case 1:
                //first restful api URL on all trump quotes
                return fetch('https://api.whatdoestrumpthink.com/api/v1/quotes')
                    .then(res1 => res1.json())
                    .then(res1 => {
                        //randomly pick one quote off the json list and return its string
                        return res1.messages.personalized[Math.floor((Math.random() * 569) + 1)];
                    });
            case 2:
                //first restful api URL on randomized fortune cookie quote
                return fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
                    .then(res => res.json())
                    .then(res => {
                        //return fortune cookie quote
                        return res[0].fortune.message;
                    });
            default:
                //default restful api will be everybody favorite quote
                return fetch('https://favqs.com/api/qotd')
                    .then(res2 => res2.json())
                    .then(res2 => {
                        //return everybody favorite quote
                        return res2.quote.body;
                    });
        }
    }
};

export { RandomQuote };