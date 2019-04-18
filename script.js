//in iterer over keys
//of iterer over values

//Takes an array of all the ids and returns an dict where keys is the id and value is the value of the key
function saveToDict(array){
    let res = {};
    for(let name of array){
        res[name] = document.getElementById(name).value;
    }
    return res;
}

//takes a dict and loads the keys values into the id
function loadFromDict(dict){
    for(let key in dict){
        document.getElementById(key).value = dict[key];
    }
}

function encode(dict){
    return btoa(dict);
}

function decode(str){
    return atob(str);
}

function save(){
    let arr = ["name", "class"]; //skal nok sendes med eller genereres på den ene eller anden måde
    let dict = saveToDict(arr);
    let str = encode(dict);

    //save str to a file with name
}

function load(){
    //get str from file
    let str = "";
    let dict = decode(str);
    loadFromDict(dict);
}