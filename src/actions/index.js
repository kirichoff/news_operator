export const add = (txt,id,header,src = "../shadowlll.jpg")=>
    ({
        type: 'ADD',
        text: txt,
        id: id,
        header: header,
        src: src
});
