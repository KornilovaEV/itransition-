// массив объектов
let keys = ['a', 'b', 'c', 'd', 'e'];
let l = keys.length;
let obj = {};
for (let i = 0; i < l; i++) {
    let step = 2;
    if (i + step <= l) {
        if (i - step >= 0) {
            for (let s = 0; s <= step; s++) {
                obj[keys[i]] = {
                    [keys[i]]: "Draw",
                    [keys[i + s]]: "Win",
                    [keys[i - s]]: "lose"
                }
            }
        } else {
            for (let s = 0; s <= step; s++)
                for (let _s = i; _s >= 0; _s--)
                    obj[keys[i]] = {
                        [keys[i]]: "Draw",
                        [keys[i + s]]: "Win",
                        [keys[_s]]: "lose"
                    }
            for (let s = 0; s <= step; s++)
                for (let __s = l; __s >= l - step + i; __s--)
                    obj[keys[i]] = {
                        [keys[i]]: "Draw",
                        [keys[i + s]]: "Win",
                        [keys[__s]]: "lose"
                    }
        }
    } else {
        let r = i + step - l;
        r = Math.abs(r);
        if (i - step >= 0) {
            for (let s_ = 0; s_ <= r; s_++)
                for (let s = 0; s <= step; s++) {
                    obj[keys[i]] = {
                        [keys[i]]: "Draw",
                        [keys[i + s_]]: "Win",
                        [keys[i - s]]: "lose"
                    }
                }
        } else {
            for (let s_ = 0; s_ <= r; s_++)
                for (let s__ = i; s__ >= 0; s__--)
                    obj[keys[i]] = {
                        [keys[i]]: "Draw",
                        [keys[i + s_]]: "Win",
                        [keys[s__]]: "lose"
                    }
            for (let s = l; s >= r; s--)
                for (let s_ = 0; s_ <= r; s_++)
                    obj[keys[i]] = {
                        [keys[i]]: "Draw",
                        [keys[i + s_]]: "Win",
                        [keys[s]]: "lose"
                    }

        }
    }
}


console.table(obj);